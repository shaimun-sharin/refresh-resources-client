import React from "react";
import img404 from "../../img404.gif";

const NotFound = () => {
  return (
    <div>
      <h1 className="text-danger text-center">Something went wrong!</h1>
      <img className="w-50 rounded mx-auto d-block" src={img404} alt="" />
      <br />
      <button className="btn btn-success mx-auto d-block text-center w-25">
        <a className="text-decoration-none text-white" href="/">
          Go to Home Page
        </a>
      </button>
    </div>
  );
};

export default NotFound;
