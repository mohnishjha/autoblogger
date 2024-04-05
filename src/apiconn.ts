import axios from "axios";

export const apiUrl = import.meta.env.VITE_API_URL.replace(/\/$/, "");

// @ts-ignore
window.apiUrl = apiUrl;

export const apiConn = axios.create({
  // `baseURL` will be prepended to `url` unless `url` is absolute.
  // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
  // to methods of that instance.
  baseURL: apiUrl,

  headers: {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0"
  },

  // `responseType` indicates the type of data that the server will respond with
  responseType: "json",

  // `timeout` specifies the number of milliseconds before the request times out.
  // If the request takes longer than `timeout`, the request will be aborted.
  timeout: 0,

  maxContentLength: 5000,

  // `validateStatus` defines whether to resolve or reject the promise for a given
  // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
  // or `undefined`), the promise will be resolved; otherwise, the promise will be
  // rejected.
  validateStatus: function (status) {
    return status >= 200 && status < 300;
  },

  // `maxRedirects` defines the maximum number of redirects to follow in node.js.
  // If set to 0, no redirects will be followed.
  maxRedirects: 0 // default
});

// @ts-ignore
window.apiConn = apiConn;
