import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
        <p className="mt-2 px-4 text-white">OR</p>
        <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
      </div>
      <div>
        <button className="btn btn-outline-success w-75 text-center d-block mx-auto">
          <FontAwesomeIcon className="px-2" icon={faGoogle} /> Continue with
          Google
        </button>
      </div>
    </div>
  );
};

export default Socials;
