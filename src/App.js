import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
//これは、このコンポーネントで囲った配下でRoutingを有効にするというもの。
//BrouserRouterで囲ってあげるといい。
//Linkを使うことで簡単にページ遷移ができる
//リンク先のページの出し分けをするのが、Switchというコンポを使用する
//Switchの中でRouteにマッチしたものを表示していくという部分でRouteを使用する。
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
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
      <Switch>
        {/* exactはtrue or　falseを含んでいて完全一致したものを返すようになっている。 */}
        {/* exactがないと、/は全てのパスが対象になってしまう。 完全一致以外対象にしたくない場合は、exactをつけること。　 */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/page1">
          <Page1 />
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
// BrowserRouterで囲わないとRoutingができない。
