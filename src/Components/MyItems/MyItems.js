import axios from "axios";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useFoods from "../hooks/useFoods";
import Loading from "../Loading/Loading";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [foods, setFoods] = useFoods();

  useEffect(() => {
    const getItems = async () => {
      const email = user?.email;
      const url = `http://localhost:5000/food?email=${email}`;
      const { data } = await axios.get(url);
      setFoods(data);
    };
    getItems();
    // const email = user?.email;
    // console.log(user);
    // const url = `http://localhost:5000/food?email=${email}`;
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setFoods(data));
  }, [user]);
  //   if (loading) {
  //     return <Loading></Loading>;
  //   }
  return (
    <div>
      <h3 className="text-white">my items: {foods.length}</h3>
    </div>
  );
};

export default MyItems;
