// App.jsに記載したSwitch文を記載する
import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { page1Routes } from "./Page1Route";
// import { Page1 } from "../Page1";
// import { Page1DetailA } from "../Page1DetailA";
// import { Page1DetailB } from "../Page1DetailB";
import { page2Routes } from "./Page2Route";
// import { Page2 } from "../Page2";

export const Router = () => {
  return (
    <Switch>
      {/* exactはtrue or　falseを含んでいて完全一致したものを返すようになっている。 */}
      {/* exactがないと、/は全てのパスが対象になってしまう。 完全一致以外対象にしたくない場合は、exactをつけること。　 */}
      <Route exact path="/">
        <Home />
      </Route>
      {/* nestのリンクページを作成する。Page1.jsxで作成 */}
      {/* <Route path="/page1" render={() => ()}> */}
      {/* <Page1 /> */}
      {/* </Route> */}
      {/* renderのアロー関数の中にPage1を返すことでも書くことができる。 */}
      {/* nestされた部分を別ファイルに書き出す。 */}
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
            {/* pathにpage1を書かないでいいようにする。propsのmatchにあるurlのpage1を使用する
          {/* {console.log(props)} */}
            {/* {console.log(url)} */}
            {/* <Route exact path="/page1"> */}
            {/* <Route exact path={url}>
              <Page1 />
             </Route> */}
            {/* nestした部分が引っかからないようにexactをつける。 */}
            {/* <Route path={`${url}/detailA`}>
            <Page1DetailA />
          </Route>
          <Route path={`${url}/detailB`}>
            <Page1DetailB />
          </Route> */}
          </Switch>
        )}
      />
      {/* page1で囲っているなら確実に配下はpage１である保証をする必要がある。　propsを渡す。  */}
      {/* ネストされた部分も追加する。 */}
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {page2Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
    </Switch>
  );
};
