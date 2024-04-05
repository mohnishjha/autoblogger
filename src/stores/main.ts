import { createStore } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { useStoreWithEqualityFn } from "zustand/traditional";

export interface AppStore {
  token: string | null;
  setToken(token: string): void;
  clearToken(): void;

  userId: number;
  userRole: string;
  name: string;
  email: string;
  setUserInfo(id: number, role: string, name: string, email: string);
}

export const appStoreInstance = createStore<
  AppStore,
  [["zustand/persist", any], ["zustand/immer", never]]
>(
  persist(
    immer(set => ({
      token: null,
      userId: -1,
      userRole: "",
      name: "",
      email: "",
      setToken: token =>
        set(store => {
          store.token = token;
        }),

      clearToken: () =>
        set(store => {
          store.token = null;
          store.userId = -1;
          store.userRole = "";
          store.name = "";
          store.email = "";
        }),
      setUserInfo: (id, role, name, email) =>
        set(store => {
          store.userId = id;
          store.userRole = role;
          store.name = name;
          store.email = email;
        })
    })),
    {
      name: "hackathon",
      storage: createJSONStorage(() => sessionStorage),
      version: 1
    }
  )
);

export const useAppStore = <T>(
  selector: (store: AppStore) => T,
  equalityFn?: (a: T, b: T) => boolean
) => useStoreWithEqualityFn(appStoreInstance, selector, equalityFn);

export const useAppStoreKey = <T extends keyof AppStore>(key: T) =>
  useAppStore(store => store[key]);

export declare const gstore: AppStore;
if (typeof (window as any)["gstore"] === "undefined") {
  Object.defineProperty(window, "gstore", {
    get: function () {
      return appStoreInstance.getState();
    }
  });
}
