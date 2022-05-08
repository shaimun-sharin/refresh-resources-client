import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="text-center m-4 text-white">
      <div className="d-flex align-items-center justify-content-center">
        <FontAwesomeIcon
          className="mx-2"
          size="2x"
          icon={faFacebook}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="mx-2"
          size="2x"
          icon={faInstagram}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="mx-2"
          size="2x"
          icon={faTwitter}
        ></FontAwesomeIcon>
      </div>
      <h5> copyright © {year} </h5>
    </div>
  );
};

export default Footer;
