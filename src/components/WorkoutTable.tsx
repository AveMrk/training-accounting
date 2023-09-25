import React from "react";
import { useState } from "react";
export default function WorkoutTable({ workouts }) {
  const [list, setList] = useState(workouts);
  return (
    <table>
      <tbody>
        <tr>
          <td>Дата</td>
          <td>Пройдено км</td>
          <td>Действия</td>
        </tr>
        {console.log(workouts)}
        {list.map((workout, key) => (
        <tr>
          <td id={key}>{workout.date}</td>
          <td id={key}>{workout.km}</td>
        </tr>
        ))}
      </tbody>
    </table>
  );
}