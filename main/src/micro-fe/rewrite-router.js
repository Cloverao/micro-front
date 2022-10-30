import { handleRouter } from "./handleRouter.js";

//记录路由
let preRoute = "";
let nextRoute = window.location.pathname;

export const getPrevRoute = () => {
  return preRoute;
};
export const getNextRoute = () => {
  return nextRoute;
};
export const rewriteRouter = (_apps) => {
  //微前端运行原理：
  //1.监视路由变化
  //使用hash模式，通过onhashchange去监听
  //history api 使用pop state事件
  //   pushState、replaceState
  //监听前进后退
  window.addEventListener("popstate", () => {
    console.log("popState 变化了");
    handleRouter();
  });

  //添加会有历史记录
  const _pushState = window.history.pushState;
  //重写pushState方法
  window.history.pushState = (...args) => {
    preRoute = window.location.pathname;
    _pushState.apply(window.history, args);
    nextRoute = window.location.pathname;
    console.log("pushState 变化了");
    console.log(getPrevRoute(), getNextRoute());
    handleRouter();
  };

  //添加不会有历史记录，直接替换
  const _replaceState = window.history.replaceState;

  window.history.replaceState = (...args) => {
    preRoute = window.location.pathname;
    _replaceState.apply(window.history, args);
    nextRoute = window.location.pathname;
    // console.log("replaceState 变化了");
    // console.log(getPrevRoute(), getNextRoute());
    handleRouter();
  };
};
