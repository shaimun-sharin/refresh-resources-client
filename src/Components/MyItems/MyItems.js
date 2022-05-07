import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);

  const [items, setItems] = useState([]);

  useEffect(() => {
    const email = user?.email;
    console.log(email);
    const url = `https://hidden-plains-01721.herokuapp.com/food?email=${email}`;
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
