import { BrowserRouter, Link } from "react-router-dom";
//これは、このコンポーネントで囲った配下でRoutingを有効にするというもの。
//BrouserRouterで囲ってあげるといい。
//Linkを使うことで簡単にページ遷移ができる
//リンク先のページの出し分けをするのが、Switchというコンポを使用する
//Switchの中でRouteにマッチしたものを表示していくという部分でRouteを使用する。
import { Router } from "./router/Router";
// import { Home } from "./Home";
// import { Page1 } from "./Page1";
// import { Page1DetailA } from "./Page1DetailA";
// import { Page1DetailB } from "./Page1DetailB";
// import { Page2 } from "./Page2";
import "./styles.css";

export default function App() {
  //urlによってそれぞれのコンポーネントを出し分けるということを行うようにする。
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        {/* Linkで 文字を囲むとページを遷移させるものが表示される。 toで遷移先のパスを記載する。 */}
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        {/* ページ遷移の設定はできたのでそのページの時に使用するコンポーネントを選択できるようにする。 */}
        {/* <Home /> */}
        {/* <Page1 /> */}
        {/* <Page2 /> */}
      </div>
      {/* どのPathの時にどのコンポーネントを出力するのかを記載。 */}
      {/* Switch文をrouter.jsxに移行 */}
      <Router />
      {/* routeはrouteで別で出してあげる方がいい。 */}
    </BrowserRouter>
  );
}
// BrowserRouterで囲わないとRoutingができない。
