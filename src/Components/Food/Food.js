import React from "react";
import "./Food.css";

const Food = ({ food }) => {
  const { name, picture, description, price, quantity } = food;
  return (
    <div>
      <div className="card h-100 food">
        <img
          className="h-50 w-50 mx-auto rounded"
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
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  );
};

export default Food;
