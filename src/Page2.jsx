import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです。</h1>
      <Link to="/page2/999">URL Parameter</Link>
      <br />
      <Link to="/page2/999?name=hogehoge">URL Parameter</Link>
      {/* クエリパラメータ urlParameterで使用したuseLocationで取得するオブジェクトのserachの中に?以降のパラメータが取得される。*/}
    </div>
  );
};
