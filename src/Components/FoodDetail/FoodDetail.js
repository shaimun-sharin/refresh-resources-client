import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const FoodDetail = () => {
  const { id } = useParams();
  const [food, setFood] = useState({});
  const [reload, setReload] = useState(true);

  useEffect(() => {
    const url = `https://hidden-plains-01721.herokuapp.com/food/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, [reload]);
  const handleRestockItem = (e) => {
    e.preventDefault();
    const quantity = Number(e.target.quantity.value) + Number(food.quantity);

    const updateQuantity = { quantity };
    const url = `https://hidden-plains-01721.herokuapp.com/food/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(updateQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        setReload(!reload);
        console.log("success", data);
        alert("Product Restock");
        e.target.reset();
      });
  };

  const handleDeliverButton = () => {
    const quantity = Number(food.quantity) - 1;
    const updateQuantity = { quantity };
    const url = `https://hidden-plains-01721.herokuapp.com/food/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(updateQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        setReload(!reload);
        alert("Product Delivered");
        console.log("success", data);
      });
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
          <button onClick={handleDeliverButton} className="btn btn-danger">
            Delivered
          </button>
        </div>
      </div>
      <div>
        <form onSubmit={handleRestockItem}>
          <input type="text" name="quantity" id="" />
          <input
            className="bg-success text-white rounded-2 border"
            type="submit"
            value="Restock Quantity"
          />
        </form>
      </div>
      <button className="btn btn- d-block w-25 mt-4 m-auto">
        <Link className="text-decoration-none text-white" to="/manageInventory">
          Manage Inventory
        </Link>
      </button>
    </div>
  );
};

export default FoodDetail;
