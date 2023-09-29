import React, { useContext } from "react";
import ItemCard from "./ItemCard";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ShoeContext } from "../ShoeContext";
import { useAuth } from "../AuthContext";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Items = () => {
  const shoes = useContext(ShoeContext);
  const { user } = useAuth();

  return (
    <div className="flex justify-center px-20 items-center w-full">
      <div className="w-[80%] xs:w-full xs:px-3 py-14 gap-10 flex flex-wrap justify-center items-center">
        {shoes.map((shoe, index) => {
          const [ref, inView] = useInView({
            triggerOnce: true, // Trigger the animation only once when it comes into view
          });

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              ref={ref}
            >
              <ItemCard
                username={user.username}
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
            </motion.div>
          );
        })}
        <Link to="/shop">
          <button className="bg-rose-500 hover:bg-rose-600 flex justify-center items-center gap-4 text-white font-semibold py-3 px-4 text-lg rounded-full shadow-md hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
            See More <FaArrowRightLong />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Items;
