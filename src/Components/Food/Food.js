import React from "react";
import "./Food.css";

const Food = ({ food }) => {
  const { name, picture, description, price, quantity } = food;
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
          <h3 class="card-title">{name}</h3>
          <p className="card-text">{description}</p>
          <p className="card-text">{price}</p>
          <h6 className="card-text">(in Dozens){quantity}</h6>
        </div>
        <div className="card-footer">
          <button className="btn btn-success w-50 m-auto text-center">
            Update Stock
          </button>
        </div>
      </div>
    </div>
  );
};

export default Food;
