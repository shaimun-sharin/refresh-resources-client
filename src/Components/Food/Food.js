import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Food.css";

const Food = ({ food }) => {
  const { name, picture, description, price, quantity, _id, supplierName } =
    food;
  const navigate = useNavigate();
  const handleNavigation = (id) => {
    navigate(`/food/${id}`);
  };

  return (
    <div className="container">
      <div>
        <Card>
          <Card.Img
            className="img rounded w-50 mx-auto"
            variant="top"
            src={picture}
          />
          <Card.Body>
            <Card.Title>Product name -{name}</Card.Title>
            <Card.Text>About -{description}</Card.Text>
            <Card.Text>
              <h5>Supplied By - {supplierName}</h5>
            </Card.Text>
            <Card.Text>
              <h6>Price - {price}</h6>
            </Card.Text>
            <Card.Text>
              <h6>Quantity - {quantity}</h6>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <button
              onClick={() => handleNavigation(_id)}
              className="btn btn-success m-auto text-center"
            >
              Update Stock
            </button>
          </Card.Footer>
        </Card>
      </div>

      {/* <div style={{ width: "18rem" }} className="card  food">
        <img
          className="card-img-top img rounded w-50 mx-auto"
          src={picture}
          alt="..."
        />
        <div className="card-body">
          <h3 class="card-title">
            Product Name- <span className="text-danger">{name}</span>
          </h3>
          <p className="card-text">About -{description}</p>
          <h4 className="card-text text-primary">
            Supplied By -{supplierName}
          </h4>
          <h5 className="card-text">Price-{price}</h5>
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
      </div> */}
    </div>
  );
};

export default Food;
