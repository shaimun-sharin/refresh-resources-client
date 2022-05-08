import React, { useEffect, useState } from "react";
import SingleAdmin from "../SingleAdmin/SingleAdmin";
import "./Admins.css";

const Admins = () => {
  const [admins, setAdmins] = useState([]);
  useEffect(() => {
    fetch("https://hidden-plains-01721.herokuapp.com/admin")
      .then((res) => res.json())
      .then((data) => setAdmins(data));
  }, []);

  return (
    <div>
      <h1 className="text-success text-center my-4">Admin Dashboard</h1>
      <div className="admins container">
        {admins.map((admin) => (
          <SingleAdmin key={admin._id} admin={admin}></SingleAdmin>
        ))}
      </div>
    </div>
  );
};

export default Admins;
