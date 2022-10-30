import { importHtml } from "./importHtml.js";
import { getApps } from "./index.js";
import { getNextRoute, getPrevRoute } from "./rewriteRouter.js";
export const handleRouter = async () => {
  //根据当前地址匹配子应用
  const pathname = window.location.pathname;

  const prevApp =
    getApps() &&
    getApps().find((item) => {
      return getPrevRoute() && getPrevRoute().startsWith(item.activeRule);
    });
  const app =
    getApps() &&
    getApps().find((item) => {
      return getNextRoute() && getNextRoute().startsWith(item.activeRule);
    });
  //前一个路由存在，卸载路由
  if (prevApp) {
    prevApp.unmount && prevApp.unmount();
  }
  if (!app) return;
  //有匹配的，进行渲染
  const container = document.querySelector("#subapp-container");
  //加载匹配到的子应用资源
  // const response = await fetch(app.entry);
  // const body = await response.text();
  const { template, execScript } = await importHtml(app.entry);

  //将加载到的资源追加到主应用提供的容器中
  // container.innerHTML = template;

  container.appendChild(template);
  const result = await execScript();
  console.log(result);

  app.bootstrap = result.bootstrap;
  app.mount = result.mount;
  app.unmount = result.unmount;

  await bootstrap(app);
  await mount(app);
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

async function unmount() {}
