// import importHTML from "import-html-entry";
import { fetchResource } from "./fetch-resource";
//解析html模块代码
export const importHtml = async (url) => {
  //解析html文件，加载app.js文件
  //截取script标签
  const html = await fetchResource(url);
  const template = document.createElement("div");
  template.innerHTML = html;

  //查找所有script标签
  const scripts = template.querySelectorAll("script");
  async function getExternalScripts() {
    return Promise.all(
      Array.from(scripts).map((script) => {
        const src = script.getAttribute("src");
        if (!src) {
          return Promise.resolve(script.innerHTML);
        } else {
          //拼接src属性
          return fetchResource(src.startsWith("http") ? "src" : `${url}${src}`);
        }
      })
    );
  }
  //执行scripts
  async function execScript() {
    const scripts = await getExternalScripts();
    //手动构建commonjs规范
    const module = { exports: {} };
    const exports = module.exports;
    //控制子应用挂载问题
    window.__POWERED_BY_QIANKUN__ = true;
    window.__POWERED_BY_QIANKUN__ = app.entry + "/";
    //子应用样式隔离问题，通过打包library库实现umd格式iife
    //umd兼容commonjs amd和es module
    scripts.forEach((code) => {
      eval(code);
    });

    return module.exports;
    // return window["app-vue2-app"];
  }

  return { template, getExternalScripts, execScript };
};
