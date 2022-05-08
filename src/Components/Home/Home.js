import Banner from "../Banner/Banner";
import Foods from "../Foods/Foods";
import WhyChoose from "../WhyChoose/WhyChoose";
import { Link } from "react-router-dom";
import Admins from "../Admins/Admins";

const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <Foods></Foods>
      <button className="btn btn-danger d-block w-25 mt-4 m-auto">
        <Link className="text-decoration-none text-white" to="/manageInventory">
          Manage Inventory
        </Link>
      </button>
      <WhyChoose></WhyChoose>
      <Admins></Admins>
    </div>
  );
};

export default Home;
