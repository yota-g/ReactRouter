import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  // console.log(arr);
  //detailAに遷移したときにこの配列をそのまま持っていくという実装をする。
  const history = useHistory();
  const onClickDetailA = () => history.push("/page1/detailA");
  // pushの中にlinkのtoの部分を記載する。linkと同じように画面遷移することができる。
  return (
    <div>
      <h1>Page1ページです。</h1>
      {/* <Link to="/page1/detailA">DetailA</Link> */}
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      {/* Link以外のページ遷移の仕方 */}
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
    // nest遷移されたものを変更するときはApp.jsのRoute部分を変更しないといけない。
  );
};
