import { createApp } from "vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import Router from "./router";
import App from "./App.vue";
// import { registerMicroApps, start } from "qiankun";
import { registerMicroApps, start } from "./micro-front";
const app = createApp(App);

//注册子应用,当匹配到activeRule的时候，请求获取entry资源，渲染到container中
//加载的静态资源路径问题；切换路径之后子应用没有切换问题；
registerMicroApps([
  {
    name: "app-react",
    entry: "//localhost:3000", //子应用html入口
    container: "#subapp-container", //渲染到哪里
    activeRule: "/app-react", //路由匹配规则
  },
  {
    name: "vue2App",
    entry: "//localhost:8081",
    container: "#subapp-container",
    activeRule: "/app-vue2",
  },
  // {
  //   name: "app-vue3",
  //   entry: "//localhost:8082",
  //   container: "#subapp-container",
  //   activeRule: "#/app-vue3",
  // },
]);
start();
app.use(ElementPlus);
app.use(Router);
app.mount("#app");
