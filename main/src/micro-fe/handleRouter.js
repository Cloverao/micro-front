/**
 * 处理路由变化
 */
import { importHtml } from "./importHtml";
import { getApps } from "./index";
import { getNextRoute, getPrevRoute } from "./rewrite-router";
export const handleRouter = async () => {
  //2.匹配子应用
  //根据获取当前的router跟apps里面的进行匹配
  const _apps = getApps();
  const pathname = window.location.pathname;

  //判断是否有上一个应用
  const _prevApp = _apps.find((item) => {
    return getPrevRoute() && getPrevRoute().startsWith(item.activeRule);
  });

  const app = _apps.find((item) => {
    return getNextRoute() && getNextRoute().startsWith(item.activeRule);
  });
  console.log("获取router ");
  console.log(getPrevRoute(), getNextRoute());
  //判断有上一个应用，卸载应用卸载应用之后，为什么app还是等于app2
  if (_prevApp) {
    //卸载应用
    await unmount(_prevApp);
  }
  // console.log(app, "get app");
  // fetch(app.entry).then((res) => {});
  if (!app) return;
  // const response = await fetch(app.entry);
  // const body = await response.text();
  //获取到html内容但是不会执行js代码，需要手动执行，使用eval或者new Function
  // const container = document.getElementById("subapp-container");
  const container = document.querySelector(app.container);
  const { template, execScript } = await importHtml(app.entry);
  container.appendChild(template);
  const appExports = await execScript();
  app.bootstrap = appExports.bootstrap;
  app.mount = appExports.mount;
  app.unmount = appExports.unmount;

  await bootstrap(app);
  await mount(app);

  // getExternalScripts().then(async (script) => {
  // });
  //解析获取到的html代码
  //3.加载子应用
  if (!app) return;
  // console.log(app);
  //加载子应用，请求获取entry
  //4.渲染子应用
};

async function bootstrap(app) {
  app.bootstrap && app.bootstrap(app);
}

async function mount(app) {
  app.mount &&
    app.mount({
      container: document.querySelector(app.container),
    });
}

async function unmount(app) {
  app.unmount &&
    (await app.unmount({
      container: document.querySelector(app.container),
    }));
}
