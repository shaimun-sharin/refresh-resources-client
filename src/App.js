import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/food")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div className="App">
      <h1> Data load :{foods.length}</h1>
      <ul>
        {foods.map((food) => (
          <li key={food._id}>
            <h3>{food.name}</h3> <br />
            <img width={60} src={food.picture} alt="" /> <br />
            <p>{food.description}</p> <br />
            <h5>{food.supplierName}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
