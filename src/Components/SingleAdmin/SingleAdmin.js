import React from "react";
import "./SingleAdmin.css";

const SingleAdmin = ({ admin }) => {
  const { name, img, position, email, address } = admin;
  return (
    <div>
      <div class="card gx-2 mb-3">
        <div class="row gx-2">
          <div class="col-md-4">
            <img src={img} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{name}</h5>
              <p class="card-text">{position}</p>
              <p class="card-text">{email}</p>
              <p class="card-text">{address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAdmin;
