import { useParams, useLocation } from "react-router-dom";
// クエリパラメータで活用できるuseLocationをimport

export const UrlParameter = () => {
  const { id } = useParams();
  //Page2Routeで設定したidを使用する。
  // const location = useLocation();
  // console.log(location);
  const { search } = useLocation();
  // console.log(search);
  // 分割代入でserachが取得できる。
  const query = new URLSearchParams(search);
  //クエリパラメータを便利に扱えるためのメソッドを提供してくれている。
  return (
    <div>
      <h1>UrlParameterページです。</h1>
      <p>パラメーターは{id}です</p>
      {/* idが取得できているかを確認。 */}
      <p>クエリパラメータは{query.get("name")}です。</p>
      {/* nameと=になっているhogehogeが取得できる。 */}
    </div>
  );
};
