import React from "react";
import { Table } from "react-bootstrap";
import useFoods from "../hooks/useFoods";

const Manageinventory = () => {
  const [foods] = useFoods([]);
  return (
    <div>
      <h1 className="text-center text-success p-4">Inventory</h1>
      <div>
        <Table className="table-danger container" bordered>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Delete Item</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food) => (
              <tr>
                <td>{food.name}</td>
                <td>{food.price}</td>
                <td>{food.quantity}</td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Manageinventory;
