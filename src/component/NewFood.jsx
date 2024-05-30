import { useState } from "react";
import AllFood from "./AllFood";

const NewFood = () => {
  const [Day, setDay] = useState("");
  const [Time, setTime] = useState("");
  const [Food, setFood] = useState("");
  const [FoodData, setFoodData] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  const AddFood = () => {
    const mix = {
      Day,
      Time,
      Food,
      id: Date.now(),
    };
    setFoodData((prevState) => [...prevState, mix]);
    // setDay("");
    // setTime("");
    setFood("");
    console.log(FoodData);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center">
        <h1 className="text-4xl">Plan Your Food In Advance</h1>
      </div>

      <form
        className=" flex flex-col justify-center items-center "
        onClick={handleFormSubmit}
      >
        <div className="flex bg-slate-700 m-10 p-2">
          <div className="w-1/2 p-2 m-2 flex flex-col">
            <label htmlFor="Day">Day</label>
            <select
              name="Day"
              id="Day"
              className="bg-slate-500 text-black p-2 m-2"
              value={Day}
              onChange={(e) => setDay(e.target.value)}
            >
              <option value="Sunday">Sunday</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
            </select>
            <label htmlFor="Time">Time</label>
            <select
              name="Time"
              id="Time"
              className="bg-slate-500 text-black p-2 m-2"
              value={Time}
              onChange={(e) => setTime(e.target.value)}
            >
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Snacks">Snacks</option>
              <option value="Dinner">Dinner</option>
            </select>
          </div>
          <div className="w-1/2 p-2 m-2">
            <label htmlFor="Food">Food</label>
            <input
              name="Food"
              id="Food"
              className="bg-slate-500 text-black p-2 m-2 w-5/6"
              onChange={(e) => setFood(e.target.value)}
              value={Food}
            />
          </div>
        </div>
        <div className="flex justify-center  p-3 m-1 rounded-md w-24">
          <button
            className="bg-slate-700 text-3xl m-1 p-2 rounded-md"
            onClick={AddFood}
          >
            Save
          </button>
        </div>
      </form>
      {/* <AllFood FoodData={FoodData} Day={Day} AddFood={AddFood} /> */}
      <AllFood FoodData="FoodData" />
    </div>
  );
};

export default NewFood;
