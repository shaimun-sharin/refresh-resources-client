import { Route, Routes } from "react-router-dom";

import "./App.css";
import FoodDetail from "./Components/FoodDetail/FoodDetail";
import Home from "./Components/Home/Home";
import app from "./firebase.init";
import { getAuth } from "firebase/auth";
const auth = getAuth(app);

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/food/:id" element={<FoodDetail></FoodDetail>}></Route>
      </Routes>
      ;
    </div>
  );
}

export default App;
