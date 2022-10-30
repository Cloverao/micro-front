// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "./public-path";
import Vue from "vue";
import App from "./App";
import route from "./router";
// import VueRouter from "vue-router";
Vue.config.productionTip = false;

/* eslint-disable no-new */
// new Vue({
//   el: "#app",
//   router,
//   components: { App },
//   template: "<App/>"
// });

let instance = null;
let router = null;
function render(props = {}) {
  const { container } = props;
  console.log(container);
  router = route;
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount(container ? container.querySelector("#app") : "#app");

  // instance = new Vue({
  //   router,
  //   store,
  //   render: (h) => h(App),
  // }).$mount(container ? container.querySelector('#app') : '#app');
}
console.log("----vue2----");
if (!window.__POWERED_BY_QIANKUN__) {
  mount({});
}
//需要导出3个重要的生命周期函数
export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}
export async function mount(props) {
  console.log("[vue] props from main framework", props);
  render(props);
}
export async function unmount(props) {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}
