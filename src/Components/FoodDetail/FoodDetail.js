import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";

const FoodDetail = () => {
  const { id } = useParams();
  const [food, setFood] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/food/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFood(data));
  });
  return (
    <div>
      <div class="card w-25 mx-auto">
        <img
          className="w-25 mx-auto"
          src={food.picture}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h3 class="card-title">{food.name}</h3>
          <p class="card-text">{food.description}</p>
          <button className="btn btn-danger">Delivered</button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
