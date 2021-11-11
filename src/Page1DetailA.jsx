import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  // const location = useLocation();
  // console.log(location);
  const { state } = useLocation();
  console.log(state);
  // 配列を取得することができる。
  const history = useHistory();
  const onClickBack = () => history.goBack();
  //goBackで前のページに戻ることができる。
  return (
    <div>
      <h1>Page1DetailAページです。</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
