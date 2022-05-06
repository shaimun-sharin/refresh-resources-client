import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useFoods from "../hooks/useFoods";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [foods, setFoods] = useFoods();
  useEffect(() => {
    const email = [user.email];
    // console.log(user);
    const url = `http://localhost:5000/food?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, [user, setFoods]);
  return (
    <div>
      <h3 className="text-white">my items: {foods.length}</h3>
    </div>
  );
};

export default MyItems;
