import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
];
// urlParameterのpathの書き方は特殊:をつけて記載する。
// ：の後ろの名称はなんでもいい。そうすることでURLパラメータとして使用できる
