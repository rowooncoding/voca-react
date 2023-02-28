import { useParams } from "react-router-dom";
import dummy from "../database/data.json";
export default function Day() {
  const { day } = useParams();
  const wordList = dummy.words.filter((word) => word.day === +day);
  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => (
            <tr key={word.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
              <td>
                <button>뜻 보기</button>
                <button className="btn_del">삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
