import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { BsStarHalf, BsStarFill } from "react-icons/bs";
import ImageGallery from "./ImageGallery";
import LoadingSpinner from "./LoadingSpinner";
import { useParams } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { HiOutlineShoppingCart } from 'react-icons/hi'


const Shoe = () => {
  const { id } = useParams();
  const [shoeDetails, setShoeDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state
  const [isFavourite, setIsFavourite] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    // Ensure user is not null before making the fetch request
    if (user) {
      // Make a fetch request to get shoe details by ID
      fetch(`http://localhost:3000/api/shoes/${id}?username=${user.username}`) // Pass the username as a query parameter
        .then((response) => response.json())
        .then((data) => {
          // Update the state with the fetched shoe details
          setShoeDetails(data);
          setIsLoading(false); // Set isLoading to false when data is fetched
          setIsFavourite(data.isFav);
          setIsCart(data.isCart);
        })
        .catch((error) => {
          console.error("Error fetching shoe details:", error);
        });
    }
  }, [id, user]);

  useEffect(() => {
    // This will be called whenever shoeDetails changes
    console.log(shoeDetails);
  }, [shoeDetails]);

  const handleFavoriteClick = () => {
    // Assuming you have an API endpoint to add/remove favorites
    setIsFavourite((prevIsFavorite) => !prevIsFavorite);

    fetch(`http://localhost:3000/api/add-to-favorites`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user.username,
        shoeId: id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Check the response from the server and update the UI accordingly
        if (data.success) {
          console.log("Added/Removed from Favourites");
        } else {
          // Handle error, e.g., show a message to the user
          console.error("Failed to add to favorites.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleCartClick = () => {
    // Assuming you have an API endpoint to add/remove favorites
    setIsCart((prevIsCart) => !prevIsCart);

    fetch(`http://localhost:3000/api/add-to-cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user.username,
        shoeId: id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Check the response from the server and update the UI accordingly
        if (data.success) {
          console.log("Added/Removed from Favourites");
        } else {
          // Handle error, e.g., show a message to the user
          console.error("Failed to add to favorites.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const sizes = [
    "UK 6",
    "UK 6.5",
    "UK 7",
    "UK 7.5",
    "UK 8",
    "UK 8.5",
    "UK 9",
    "UK 9.5",
    "UK 10",
    "UK 10.5",
    "UK 11",
    "UK 12",
  ];
  const images = [
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/31ff59e2-89d0-4a83-839a-656618674782/air-jordan-1-mid-shoes-SQf7DM.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6a2c328c-34bf-4699-9513-4fe80ee7e0fb/air-jordan-1-mid-shoes-SQf7DM.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2838806d-22c6-4cba-b015-8478a6ce6d64/air-jordan-1-mid-shoes-SQf7DM.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/82d26c28-58a2-464f-881e-b20d2b5eafa8/air-jordan-1-mid-shoes-SQf7DM.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8dcaf01b-3c49-499e-a9b9-f65fd2c056f3/air-jordan-1-mid-shoes-SQf7DM.png",
  ];
  const [selectedSize, setSelectedSize] = useState(null);

  // Function to handle size selection
  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="w-full px-20 xs:px-5 flex justify-center items-start xs:items-center xs:flex-col my-10 xs:my-5 gap-20 xs:gap-6">
          <div className="w-[50%] xs:w-full flex overflow-hidden sticky xs:relative top-0">
            <ImageGallery images={images} />
          </div>
          <div className="w-[50%] xs:w-full flex flex-col pl-10 xs:pl-3">
            <h3 className="text-2xl font-medium">{shoeDetails.title}</h3>
            <h5 className="text-lg font-medium">Men's Shoes</h5>
            <p className="text-lg mt-2 font-medium">
              MRP: $ {shoeDetails.price}
            </p>
            <p className=" text-gray-500 text-base">
              incl. of taxes <br /> (Also includes all applicable duties)
            </p>

            <div className="w-[400px] xs:w-full flex flex-col">
              <div className="flex mt-5 justify-between">
                <p className="font-semibold text-lg">Select Size</p>
                <a
                  href="https://www.nike.com/in/size-fit/mens-footwear"
                  target="_blank"
                  className="font-semibold text-lg text-gray-500"
                >
                  Size Guide
                </a>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-3">
                {sizes.map((size, index) => (
                  <div
                    key={index}
                    className={`text-lg p-2 text-center rounded-md cursor-pointer ${
                      selectedSize === size
                        ? "border border-black hover:border-gray-950 focus-within:border-gray-950"
                        : "border border-gray-400 hover:border-gray-950"
                    }`}
                    onClick={() => handleSizeSelection(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>
              <button className={`bg-black border border-black  mt-5 text-white font-semibold py-5 px-4 rounded-[30px] transition-all transform duration-300 ${isCart ? ' bg-yellow-500 border border-yellow-500 hover:scale-100 hover:bg-yellow-600' : 'hover:scale-105 hover:bg-gray-900' } flex justify-center items-center gap-4`} onClick={handleCartClick}>
              {isCart ? (
                  <>
                    Added to Cart <HiOutlineShoppingCart fontSize={20} />
                  </>
                ) : (
                  <>
                    Add to Cart 
                  </>
                )}
              </button>
              <button className={`flex  justify-center items-center gap-3  border  mt-2  font-semibold py-5 px-4 rounded-[30px] transform transition-all duration-300 ${isFavourite ? " bg-red-600 border-red-600 hover:border-red-600 text-white" : "bg-white border-gray-600 hover:border-black text-black"}`} onClick={handleFavoriteClick}>
                {isFavourite ? (
                  <>
                    Added to Favourite <AiFillHeart fontSize={20} />
                  </>
                ) : (
                  <>
                    Add to Favourite <AiOutlineHeart fontSize={20} />
                  </>
                )}
              </button>
              <h3 className="text-normal mt-6">
                Inspired by the original AJ1, this mid-top edition maintains the
                iconic look you love while choice colours and crisp leather give
                it a distinct identity.
              </h3>
              <h3 className="text-lg font-semibold mt-4">Benefits</h3>
              <ul className="list-disc pl-5">
                <li>
                  Leather, synthetic leather and textile upper for a supportive
                  feel.
                </li>
                <li>
                  Foam midsole and Nike Air cushioning provide lightweight
                  comfort.
                </li>
                <li>
                  Rubber outsole with pivot circle gives you durable traction.
                </li>
                <li>Colour Shown: White/Black/Gym Red</li>
                <li>Style: DQ8426-106</li>
                <li>Country/Region of Origin: Indonesia</li>
              </ul>
              <div className="w-full h-px bg-gray-400 mt-3" />
              <div className="relative mt-6">
                <div
                  className="flex justify-between items-center"
                  onClick={toggleDropdown}
                >
                  <h3 className="text-xl">Deliver & Return</h3>
                  <FiChevronDown
                    fontSize={25}
                    className={`mr-3 transition-all duration-300 ${
                      isOpen && "rotate-180"
                    }`}
                  />
                </div>
                <div
                  className={`mt-3 transition-all duration-300 overflow-hidden ${
                    isOpen ? "h-[145px] opacity-100" : "h-0 opacity-0"
                  }`}
                >
                  <p className="leading-[30px] ">
                    All purchases are subject to delivery fees. <br /> Standard
                    delivery 4–9 business days <br /> Orders are processed and
                    delivered Monday–Friday (excluding public holidays) <br />{" "}
                    Our Premium Members enjoy free returns.
                  </p>
                </div>
              </div>
              <div className="w-full h-px bg-gray-400 mt-3" />
              <div className="w-full flex justify-between items-center mt-6">
                <h1 className="text-2xl font-medium">
                  Reviews <span className="text-xl"> (376) </span>
                </h1>
                <div className="flex justify-center items-center gap-1">
                  <p className="mx-2 text-lg ">4.5</p>
                  <BsStarFill fontSize={20} />
                  <BsStarFill fontSize={20} />
                  <BsStarFill fontSize={20} />
                  <BsStarFill fontSize={20} />
                  <BsStarHalf fontSize={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Shoe;
