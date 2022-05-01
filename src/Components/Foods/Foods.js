import React, { useEffect, useState } from "react";
import Food from "../Food/Food";
import "./Foods.css";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/food")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div className="foods">
      {foods.map((food) => (
        <Food key={food._id} food={food}></Food>
      ))}
    </div>
  );
};

export default Foods;
