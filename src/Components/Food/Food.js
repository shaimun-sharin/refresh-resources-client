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
    </div>
  );
};

export default Food;
