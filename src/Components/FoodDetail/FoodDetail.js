import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FoodDetail = () => {
  const { id } = useParams();
  const [food, setFood] = useState({});
  useEffect(() => {
    const url = `https://hidden-plains-01721.herokuapp.com/food/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFood(data));
  });

  const handleQuantity = () => {
    const quantity = parseInt(food.quantity);
    console.log(quantity);
    const newQuantity = quantity - 1;
    console.log(newQuantity);
    // const url = `http://localhost:5000/food/${id}`;
    // fetch(url, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(newQuantity),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  };
  return (
    <div>
      <div style={{ width: "18rem" }} class="card  mx-auto">
        <img
          className="card-img-top w-50 mx-auto"
          src={food.picture}
          alt="..."
        />
        <div class="card-body">
          <h3 class="card-title">Name-{food.name}</h3>
          <h4 class="card-text">Price-{food.price}</h4>
          <h5 class="card-text">Quantity(in Dozens)-{food.quantity}</h5>
          <p class="card-text">Description-{food.description}</p>

          <h6 class="card-text">Supplier Name-{food.supplierName}</h6>
          <button onClick={handleQuantity} className="btn btn-danger">
            Delivered
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
