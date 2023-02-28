import dummy from "../database/data.json";
export default function Day() {
  return (
    <table>
      <tbody>
        {dummy.words.map((word) => (
          <tr>
            <td>{word.eng}</td>
            <td>{word.kor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
