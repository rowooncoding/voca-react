import { useState } from "react";

export default function Word({ word }) {
  const [isShow, setIsShow] = useState(false);
  function toogleShow() {
    setIsShow(!isShow);
  }
  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toogleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
        <button className="btn_del">삭제</button>
      </td>
    </tr>
  );
}
