import React from "react";
import { Link } from "react-router-dom";

import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notFound w-100 mx-auto h-100">
      <h1 className="animate__animated animate__shakeX p-4  text-danger text-center">
        404! page not found
      </h1>
      <br />
      <button className="btn btn-success mx-auto d-block text-center w-25">
        <Link className="text-decoration-none text-white" to="/home">
          Go to Home Page
        </Link>
      </button>
    </div>
  );
};

export default NotFound;
