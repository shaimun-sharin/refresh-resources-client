import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import { Table } from "react-bootstrap";

const MyItems = () => {
  const [user, loading] = useAuthState(auth);

  const [items, setItems] = useState([]);
  if (loading) {
    <p className="text-white">loading..</p>;
  }
  useEffect(() => {
    const getItems = async () => {
      const email = user?.email;
      console.log(email);
      const url = `https://hidden-plains-01721.herokuapp.com/item?email=${email}`;
      const { data } = await axios.get(url);
      setItems(data);
    };
    getItems();
  }, [user]);
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
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
        });
    }
  };

  return (
    <div>
      <div>
        <h2 className="text-white"> You have added {items.length} items . </h2>
        <Table className="table-success container">
          <thead>
            <tr>
              <th>Name</th>

              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="table-success">
            {items.map((item) => (
              <tr>
                <td>
                  <h6>{item.name}</h6>
                </td>
                <td>
                  <h6>{item.price}</h6>
                </td>

                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-danger btn-sm d-block mx-auto"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MyItems;
