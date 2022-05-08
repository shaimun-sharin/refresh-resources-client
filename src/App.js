import { Route, Routes } from "react-router-dom";

import "./App.css";
import AddFood from "./Components/AddFood/AddFood";
import Admins from "./Components/Admins/Admins";
import FoodDetail from "./Components/FoodDetail/FoodDetail";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Manageinventory from "./Components/ManageInventory/Manageinventory";
import MyItems from "./Components/MyItems/MyItems";
// import app from "./firebase.init";
// import { getAuth } from "firebase/auth";
import NotFound from "./Components/NotFound/NotFound";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Header from "./Components/Shared/Header/Header";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import WhyChoose from "./Components/WhyChoose/WhyChoose";
// const auth = getAuth(app);

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>

        <Route
          path="/food/:id"
          element={
            <RequireAuth>
              <FoodDetail></FoodDetail>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addFood"
          element={
            <RequireAuth>
              <AddFood></AddFood>
            </RequireAuth>
          }
        ></Route>
        <Route path="/signIn" element={<SignIn></SignIn>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path="/whyChoose" element={<WhyChoose></WhyChoose>}></Route>
        <Route path="/admins" element={<Admins></Admins>}></Route>
        <Route path="/myItems" element={<MyItems></MyItems>}></Route>

        <Route
          path="/manageInventory"
          element={
            <RequireAuth>
              <Manageinventory></Manageinventory>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>;
    </div>
  );
}

export default App;
