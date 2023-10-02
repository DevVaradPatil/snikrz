import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo1.png";

const Footer = () => {
  const location = useLocation();
  return (
    <footer
      className={`bg-slate-700 p-8 z-50 ${
        (location.pathname === "/signin") | (location.pathname === "/signup") &&
        "hidden"
      }`}
    >
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1 - Logo */}
        <div className="text-white">
          <img src={logo} alt="logo" className=" h-28" />
        </div>

        {/* Column 2 - Shop */}
        <div className="text-white">
          <h2 className="text-lg font-semibold mb-4">Shop</h2>
          <ul className="space-y-2">
            <li>
              <a href="/shop" className="footlink">
                Men
              </a>
            </li>
            <li>
              <a href="/shop" className="footlink">
                Women
              </a>
            </li>
            <li>
              <a href="/shop" className="footlink">
                All
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Connect */}
        <div className="text-white">
          <h2 className="text-lg font-semibold mb-4">Connect</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="https://github.com/DevVaradPatil"
                className="footlink"
                target="_blank"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/varad-patil-web-dev/"
                className="footlink"
                target="_blank"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/varad__patil_/"
                className="footlink"
                target="_blank"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 - Links */}
        <div className="text-white">
          <h2 className="text-lg font-semibold mb-4">Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/shop" className="footlink">
                Shop
              </a>
            </li>
            <li>
              <a href="/about" className="footlink">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="footlink">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
