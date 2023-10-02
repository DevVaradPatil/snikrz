import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa6";
import { ShoeContext } from "../ShoeContext";
import { useAuth } from "../AuthContext";
import ItemCard from "./ItemCard";

const Favourite = () => {
  const shoes = useContext(ShoeContext);
  const { user } = useAuth();
  const favshoes = shoes.filter((shoe) => shoe.isFav);
  return (
    <div className="px-20 xs:px-5 w-full justify-center items-center mb-10 mt-6">
      <h1 className="text-3xl font-semibold flex items-center gap-5">
        Your Favourites <FaHeart fontSize={30} className=" text-red-600" />{" "}
      </h1>
      <div className="flex w-full justify-center items-center">
        <div className="w-[80%] xs:w-full  xs:px-3 py-14 gap-10 flex flex-wrap justify-center items-center">
          {favshoes.map((shoe, index) => (
            <ItemCard
              username={user.username}
              key={index}
              id={shoe._id}
              title={shoe.title}
              discount={shoe.discount}
              price={shoe.price}
              img={shoe.img}
              bg={shoe.bg}
              isNew={shoe.isNew}
              isHot={shoe.isHot}
              isFav={shoe.isFav}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favourite;
