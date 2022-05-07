import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const MyItems = () => {
  const [user, loading] = useAuthState(auth);

  const [items, setItems] = useState([]);

  useEffect(() => {
    const email = user?.email;
    console.log(email);
    const url = `http://localhost:5000/food?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user]);

  return (
    <div>
      <h2 className="text-danger">my items {items.length}</h2>
    </div>
  );
};

export default MyItems;
