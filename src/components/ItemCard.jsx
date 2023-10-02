import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";

const ItemCard = ({
  username,
  id,
  title,
  price,
  img,
  bg,
  isNew,
  isHot,
  discount,
  isFav,
}) => {
  const [isFavourite, setisFavourite] = useState(isFav);
  const handleCardClick = () => {
    window.location.href = `/shoe/${id}`;
  };
  const insideCart = window.location.pathname;

  const handleFavoriteClick = () => {
    // Assuming you have an API endpoint to add/remove favorites
    setisFavourite((prevIsFavorite) => !prevIsFavorite);

    fetch(`https://snikrz-backend.onrender.com/api/add-to-favorites`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
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

  const deleteFromCart = () => {
    fetch(`https://snikrz-backend.onrender.com/api/add-to-cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        shoeId: id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Check the response from the server and update the UI accordingly
        if (data.success) {
          console.log("Added/Removed from cart");
          window.location.href = "/cart";
        } else {
          // Handle error, e.g., show a message to the user
          console.error("Failed to add to cart.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="flex justify-center items-center gap-3 relative rounded-2xl overflow-hidden flex-col">
      <div
        className={`${bg} w-[225px] h-[275px] rounded-2xl flex justify-center items-center p-5 cursor-pointer `}
        onClick={handleCardClick}
      >
        {isNew && (
          <div className="absolute bg-blue-500 text-sm px-2 text-white p-1 rounded-br-2xl top-0 left-0 z-10">
            NEW
          </div>
        )}
        {isHot && (
          <div
            className={`absolute bg-red-500 text-sm px-2 text-white p-1 rounded-br-2xl top-0 z-1 ${
              isNew && "left-8 pl-5"
            } left-0`}
          >
            HOT
          </div>
        )}

        <img
          src={img}
          alt="shoe_img"
          className=" drop-shadow-2xl -rotate-[30deg] mr-3 transition-all duration-300 ease-in-out hover:-rotate-[20deg]"
        />
      </div>
      <div className="flex justify-center items-start flex-col w-full p-3">
        <div className="flex w-full justify-between items-center">
          <h3 className="font-bold cursor-pointer" onClick={handleCardClick}>
            {title.length > 18 ? title.substring(0, 18) + "..." : title}
          </h3>
          {isFavourite ? (
            <FaHeart
              fontSize={18}
              className="ml-1 text-red-600 cursor-pointer"
              onClick={handleFavoriteClick}
            />
          ) : (
            <FaRegHeart
              fontSize={18}
              className="ml-1 text-red-600 cursor-pointer"
              onClick={handleFavoriteClick}
            />
          )}
        </div>
        <h3 className=" text-red-600">
          $ {discount}{" "}
          <span className="px-2 text-gray-600 line-through">$ {price}</span>
        </h3>
        <div className="flex justify-between w-full items-center">
          <h3 className="text-sm bg-blue-200 text-blue-800 py-1 px-2 mt-1 rounded-2xl">
            Colours
          </h3>
          <div className="flex gap-1 justify-center items-center">
            <div className="bg-black rounded-full w-5 h-5 border-2 border-gray-400" />
            <div className="bg-red-800 rounded-full w-4 h-4" />
            <div className="bg-yellow-500 rounded-full w-4 h-4" />
            <div className="bg-green-600 rounded-full w-4 h-4" />
          </div>
        </div>
        {insideCart === "/cart" && (
          <div
            className="w-full flex justify-center items-center bg-red-600 text-white p-2  mt-2 rounded-lg gap-2 transition-colors duration-200 hover:bg-slate-600 hover:text-slate-300 cursor-pointer"
            onClick={deleteFromCart}
          >
            Remove <MdDeleteForever fontSize={24} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
