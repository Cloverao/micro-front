import { handleRouter } from "./handleRouter";

export const getPrevRoute = () => {
  return _prevRouter;
};
export const getNextRoute = () => {
  return _nextRouter;
};
let _prevRouter = null;
let _nextRouter = window.location.pathname;
export const rewriteRouter = () => {
  const _replaceState = window.history.replaceState;
  window.history.replaceState = (...args) => {
    _prevRouter = window.location.pathname;
    _replaceState.apply(window.history, args);
    _nextRouter = window.location.pathname;
    handleRouter();
  };

  const _pushState = window.history.pushState;
  window.history.pushState = (...args) => {
    _prevRouter = window.location.pathname;
    _pushState.apply(window.history, args);
    _nextRouter = window.location.pathname;
    handleRouter();
  };
};
