import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
          <h3 class="card-title">Name-{food.name}</h3>
          <h4 class="card-text">Price-{food.price}</h4>
          <h5 class="card-text">Quantity(in Dozens)-{food.quantity}</h5>
          <p class="card-text">Description-{food.description}</p>

          <h6 class="card-text">Supplier Name-{food.supplierName}</h6>
          <button className="btn btn-danger">Delivered</button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
