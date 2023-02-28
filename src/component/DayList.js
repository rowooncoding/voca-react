import dummy from "../database/data.json";
export default function DayList() {
  return (
    <ul className="list_day">
      {dummy.days.map((day) => (
        <li>Day {day.day}</li>
      ))}
      <li></li>
    </ul>
  );
}
