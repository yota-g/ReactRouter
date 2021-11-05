import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
//react-routerに関して学習する。
//react-router-domをimportする。

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
