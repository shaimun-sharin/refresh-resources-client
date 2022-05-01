import React from "react";
import { useNavigate } from "react-router-dom";
import "./Food.css";

const Food = ({ food }) => {
  const { name, picture, description, price, quantity, _id } = food;
  const navigate = useNavigate();
  const handleNavigation = (id) => {
    navigate(`/food/${id}`);
  };

  return (
    <div>
      <div className="card h-100 food">
        <img
          className="w-50 h-50 mx-auto rounded mt-2"
          src={picture}
          class="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h3 class="card-title">Product Name-{name}</h3>
          <p className="card-text">About -{description}</p>
          <p className="card-text">Price-{price}</p>
          <h6 className="card-text">Quantity(in Dozens)-{quantity}</h6>
        </div>
        <div className="card-footer">
          <button
            onClick={() => handleNavigation(_id)}
            className="btn btn-success w-50 m-auto text-center"
          >
            Update Stock
          </button>
        </div>
      </div>
    </div>
  );
};

export default Food;
