import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import useFoods from "../hooks/useFoods";

const Manageinventory = () => {
  const [foods, setFoods] = useFoods([]);
  const handleDelete = (id) => {
    const proceed = window.confirm("are you sure?");
    if (proceed) {
      const url = `https://hidden-plains-01721.herokuapp.com/food/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          const remaining = foods.filter((food) => food._id !== id);
          setFoods(remaining);
        });
    }
  };
  return (
    <div>
      <h1 className="text-center text-success p-4">Inventory</h1>
      <div>
        <Table className="table-danger container" bordered>
          <thead className="text-center">
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>

              <th>Delete Item</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {foods.map((food) => (
              <tr>
                <td>
                  <h6>{food.name}</h6>
                </td>
                <td>
                  <h6>{food.price}</h6>
                </td>
                <td>
                  <h6>{food.quantity}</h6>
                </td>

                <td>
                  <button
                    onClick={() => handleDelete(food._id)}
                    className="btn btn-danger btn-sm d-block mx-auto"
                  >
                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <button className="btn btn-success d-block w-25 mt-4 m-auto">
        <Link className="text-decoration-none text-white" to="/addFood">
          Add New Item
        </Link>
      </button>
    </div>
  );
};

export default Manageinventory;
