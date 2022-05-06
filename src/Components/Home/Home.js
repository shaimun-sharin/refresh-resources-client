import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Banner from "../Banner/Banner";
import Foods from "../Foods/Foods";
import Loading from "../Loading/Loading";

const Home = () => {
  // const [user, loading] = useAuthState(auth);
  // if (loading) {
  //   return <Loading></Loading>;
  // }
  // console.log(user.email);

  return (
    <div id="home">
      <Banner></Banner>
      <Foods></Foods>
      <button className="btn btn-danger d-block w-25 mt-4 m-auto">
        <Link className="text-decoration-none text-white" to="/manageInventory">
          Manage Inventory
        </Link>
      </button>
    </div>
  );
};

export default Home;
