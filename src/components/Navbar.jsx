import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  HiMenuAlt2,
  HiOutlineSearch,
  HiOutlineShoppingCart,
  HiX,
} from "react-icons/hi";
import { FaRegUser, FaRegHeart } from "react-icons/fa6";
import { useAuth } from "../AuthContext";
import logo from '../assets/logo1.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { user } = useAuth();

  return (
    <nav
      className={`flex justify-center items-center w-full px-20 xs:px-4 pt-2 ${
        (location.pathname === "/signin") | (location.pathname === "/signup") &&
        "hidden"
      }`}
    >
      <div className="flex gap-3 xs:gap-1 w-[20%]">
        <div onClick={toggleMenu} className="relative">
          <button className="font-regular bg-slate-200 p-3 flex justify-center items-center rounded-3xl text-center h-14 text-slate-700 gap-2">
            {isMenuOpen ? <HiX fontSize={22} /> : <HiMenuAlt2 fontSize={22} />}
            <p className="xs:hidden"> Menu </p>
          </button>
          <div
            className={`menu-dropdown absolute ml-1 bg-slate-100 border border-gray-300 mt-2 p-2 px-3 rounded-xl shadow-md transition-max-h duration-300 ease-in-out overflow-hidden z-50 ${
              isMenuOpen ? "opacity-1 h-[170px]" : "opacity-0 h-0"
            }`}
          >
            <ul>
              <li>
                <Link
                  to="/"
                  className={`text-slate-700 ${
                    location.pathname === "/"
                      ? "text-violet-600 font-semibold"
                      : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <div className="w-full h-px bg-slate-500 my-2" />
              <li>
                <Link
                  to="/shop"
                  className={`text-slate-700 ${
                    location.pathname === "/shop"
                      ? "text-violet-600 font-semibold"
                      : ""
                  }`}
                >
                  Shop
                </Link>
              </li>
              <div className="w-full h-px bg-slate-500 my-2" />
              <li>
                <Link
                  to="/contact"
                  className={`text-slate-700 ${
                    location.pathname === "/contact"
                      ? "text-violet-600 font-semibold"
                      : ""
                  }`}
                >
                  Contact
                </Link>
              </li>
              <div className="w-full h-px bg-slate-500 my-2" />
              <li>
                <Link
                  to="/about"
                  className={`text-slate-700 ${
                    location.pathname === "/about"
                      ? "text-violet-600 font-semibold"
                      : ""
                  }`}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <button className="font-regular bg-slate-200 xs:hidden p-3 flex justify-center items-center rounded-3xl text-center pr-20 h-14 text-slate-700 gap-2">
          <HiOutlineSearch fontSize={22} />{" "}
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none border-none"
          />
        </button>
      </div>
      <div className="flex justify-center items-center w-[60%]">
        <img
          src={logo}
          alt="logo"
          className="h-20 brightness-80"
        />
      </div>
      <div className="flex gap-5 xs:gap-3 justify-center items-center w-[20%] xs:w-[35%]">
        {user ? (
          <Link to="/profile">
            <FaRegUser fontSize={22} className="cursor-pointer" />
          </Link>
        ) : (
          <Link to="/signin">
            <button className="bg-slate-300 p-3 rounded-3xl px-5 font-semibold ">
              Sign in{" "}
            </button>
          </Link>
        )}
        <Link to='/favourites'>
        <FaRegHeart fontSize={22} className="cursor-pointer" />
        </Link>
        <Link to='/cart'>
        <HiOutlineShoppingCart fontSize={22} className="cursor-pointer" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
