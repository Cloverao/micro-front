import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    }
  ],
  base: window.__POWERED_BY_QIANKUN__ ? "/app-vue2/" : "/",
  mode: "history"
});
