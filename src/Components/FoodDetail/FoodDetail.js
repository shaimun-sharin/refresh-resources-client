import React from "react";
import { useParams } from "react-router-dom";

const FoodDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Detail = {id}</h2>
    </div>
  );
};

export default FoodDetail;
