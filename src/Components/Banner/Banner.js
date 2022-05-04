import React from "react";
import "./Banner.css";
import banner from "../../../src/banner.jpg";

const Banner = () => {
  return (
    <div className="banner container m-4 p-4 ">
      <div className="banner-text">
        <h1 className="animate__animated animate__backInDown  text-white">
          Welcome to <span className="text-danger">Refresh Resources!</span>
        </h1>
        <p className="text-white animate__animated animate__rotateInDownLeft animate__delay-2s">
          Warehousing is the activity of holding goods over a period of time.
          The goods themselves are oftenreferred to as inventory or stock. Goods
          are being held when there is a difference between the time,place,
          quantity, or value of the goods being created and being consumed.
        </p>
      </div>
      <div>
        <img
          className="animate__animated animate__rollIn animate__delay-3s banner-img"
          src={banner}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
