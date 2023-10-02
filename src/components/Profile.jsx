import React from "react";
import { useAuth } from "../AuthContext";
import { AiFillHeart, AiFillShopping } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

const Profile = () => {
  const { logout } = useAuth(); // Access the logout function from the context

  const handleLogout = () => {
    logout(); // Call the logout function when the button is clicked
    window.location.href = "/signin";
  };

  return (
    <div className="w-full px-20 my-10 xs:flex xs:flex-col xs:px-4">
      <div className="text-4xl font-semibold">Your Profile</div>
      <div>
        <p className="text-xl text-slate-600 font-medium mt-5">
          Username :{" "}
          <span className="text-black">{localStorage.getItem("username")}</span>
        </p>
      </div>
      <div className="flex mt-5 justify-start items-start gap-3 flex-col">
        <Link to="/favourites">
          <button className="bg-slate-200 px-3 py-2 rounded-lg font-medium border border-white transition-all duration-200 hover:bg-white hover:border-slate-600 flex justify-center items-center gap-3 hover:scale-105 hover:shadow-lg hover:text-blue-500">
            View Favourites{" "}
            <AiFillHeart fontSize={20} className=" text-red-500" />
          </button>
        </Link>
        <Link to="/cart">
          <button className="bg-slate-200 px-3 py-2 rounded-lg font-medium border border-white transition-all duration-200 hover:bg-white hover:border-slate-600 flex justify-center items-center gap-3 hover:scale-105 hover:shadow-lg hover:text-blue-500">
            View Cart{" "}
            <HiShoppingCart fontSize={20} className=" text-blue-400" />
          </button>
        </Link>
        <button className="bg-slate-200 px-3 py-2 rounded-lg font-medium border border-white transition-all duration-200 hover:bg-white hover:border-slate-600 flex justify-center items-center gap-3 hover:scale-105 hover:shadow-lg hover:text-blue-500">
          View Previous Orders{" "}
          <AiFillShopping fontSize={20} className=" text-orange-500" />
        </button>
      </div>
      <button
        className="bg-red-500 mt-5 hover:bg-red-600 max-w-[300px] text-white font-semibold py-2 px-4 rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
