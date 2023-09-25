import React, { useState } from "react";
import WorkoutTable from "./WorkoutTable";

export default function WorkoutsList() {
  let workoutsList = [];
  const [km, setKm] = useState("");
  const [date, setDate] = useState("");
  const [workouts, setWorkouts] = useState([]);
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.target.id === "km") {
      setKm(e.target.value);
    } else {
      setDate(e.target.value);
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    workoutsList = workouts;
    workoutsList.push({
      date: date,
      km: km
    });
    console.log(workoutsList);
    setWorkouts(workoutsList);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
        <input id="date" value={date} onChange={handleChange} />
        <label htmlFor="km">Пройдено (км)</label>
        <input id="km" value={km} onChange={handleChange} />
        <button type="submit">ok</button>
      </form>
      {workouts && <WorkoutTable workouts={workouts} />}
    </div>
  );
}