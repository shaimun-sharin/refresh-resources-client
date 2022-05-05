import React from "react";
import Food from "../Food/Food";
import useFoods from "../hooks/useFoods";
import "./Foods.css";

const Foods = () => {
  const [foods] = useFoods();
  const newFood = [...foods];
  const foodSlice = newFood.slice(0, 6);
  return (
    <div id="products">
      <h1 className="text-center text-white p-4">Available Products</h1>
      <div className="foods">
        {foodSlice.map((food) => (
          <Food key={food._id} food={food}></Food>
        ))}
      </div>
    </div>
  );
};

export default Foods;
