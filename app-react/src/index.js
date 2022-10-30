// import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
let instance = null;
function render(props) {
  const { container } = props;
  ReactDOM.render(
    <App />,
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
  // const root = createRoot(container);
  // instance = root;
  // root.render(<App />);
}

if (!window.__POWERED_BY_QIANKUN__) {
  mount({});
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//下列方法没有被注册上
export async function bootstrap() {
  console.log("[react16] react app bootstraped");
}

export async function mount(props) {
  debugger;
  console.log("[react16] props from main framework", props);
  render(props);
}

export async function unmount(props) {
  const { container } = props;

  ReactDOM.unmountComponentAtNode(
    container
      ? document.querySelector("#subapp-container").querySelector("#root")
      : document.querySelector("#root")
  );

  // instance.unmount(
  //   document.querySelector("#subapp-container").querySelector("#root")
  // );
}
