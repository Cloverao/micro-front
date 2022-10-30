import { rewriteRouter } from "./rewriteRouter";
import { handleRouter } from "./handleRouter";
let _apps = [];

export const getApps = () => {
  return _apps;
};

export const getCurrentApp = () => {};
export const registerMicroApps = (apps) => {
  _apps = apps;
};

export const start = () => {
  rewriteRouter(_apps);
  //初始化时执行一次
  handleRouter();
};
