import { Route, Routes } from "react-router-dom";

import "./App.css";
import FoodDetail from "./Components/FoodDetail/FoodDetail";
import Home from "./Components/Home/Home";
// import app from "./firebase.init";
// import { getAuth } from "firebase/auth";
import NotFound from "./Components/NotFound/NotFound";
import Header from "./Components/Shared/Header/Header";
// const auth = getAuth(app);

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>

        <Route path="/food/:id" element={<FoodDetail></FoodDetail>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      ;
    </div>
  );
}

export default App;
