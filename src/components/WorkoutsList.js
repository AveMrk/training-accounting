import React, { useState } from "react";
import WorkoutTable from "./WorkoutTable"
export default function WorkoutsList() {
  const [km, setKm] = useState("");
  const [date, setDate] = useState("");
  const [workouts, setWorkouts] = useState([]);
  const handleChange = (e) => {
    if (e.target.id === "km") {
      setKm(e.target.value);
    } else {
      setDate(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (date.length === 8) {
      const newWorkout = {
        date: date,
        km: km
      };
      const updatedWorkouts = [...workouts, newWorkout];
      setWorkouts(updatedWorkouts);
    }
  };
  let workoutsSort = workouts.sort(function (a, b) {
    if (a.date > b.date) {
      return 1;
    }
    if (a.date < b.date) {
      return -1;
    }
    return 0;
  });
  console.log(workoutsSort);
  const workoutsResult = Object.entries(
    workoutsSort.reduce((note, entry) => {
      const date = entry.date;
      console.log(workoutsSort);
      console.log(note);
      console.log(entry);
      if (note[date] !== undefined) {
        note[date] = Number(note[date]) + Number(entry.km);
        console.log(note);
      } else {
        note[date] = entry.km;

        console.log("NOTE");
        console.log(note);
      }
      return note;
    }, {})
  ).map(([date, km]) => ({ date: date, km }));
  console.log(workoutsResult);
  return (
    <div>
      <form className="workouts-form" onSubmit={handleSubmit}>
        <div className="form-block">
          <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
          <input id="date" value={date} onChange={handleChange} />
        </div>
        <div className="form-block">
          <label htmlFor="km">Пройдено (км)</label>
          <input id="km" value={km} onChange={handleChange} />
        </div>
        <div className="form-block">
          <button type="submit">OK</button>
        </div>
      </form>
      {workoutsResult && <WorkoutTable workouts={workoutsResult} />}
    </div>
  );
}