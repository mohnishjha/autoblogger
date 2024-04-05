import cx from "clsx";
import { HTMLProps, PropsWithChildren, ReactNode } from "react";

export function Button({
  children,
  className,
  square,
  ...rest
}: { square?: boolean } & PropsWithChildren & HTMLProps<HTMLButtonElement>) {
  return (
    <button
      {...(rest as any)}
      className={cx(
        "flex items-center justify-center rounded-full",
        square ? "px-5 py-5" : "px-7 py-5",
        className
      )}
    >
      {children}
    </button>
  );
}
