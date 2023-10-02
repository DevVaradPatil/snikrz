import React, { useContext, useEffect, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { HiRocketLaunch } from "react-icons/hi2";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { ShoeContext } from "../ShoeContext";
import { useAuth } from "../AuthContext";
import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import getStripe from "../getStripe";

const Cart = () => {
  const shoes = useContext(ShoeContext);
  const [isLoading, setIsLoading] = useState(true);
  const [myshoes, setMyshoes] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    const filteredshoes = shoes.filter((shoe) => shoe.isCart);
    setMyshoes(filteredshoes);
    setIsLoading(false);
  }, [shoes]);
  if (myshoes.length === 0) {
    return (
      <div className="px-20 xs:px-5 w-full mb-10 mt-6 flex justify-center items-center flex-col gap-5">
        <h3 className="text-xl font-semibold text-slate-500 flex gap-3 justify-center items-center">
          Your Cart is Empty <HiOutlineShoppingCart fontSize={22} />{" "}
        </h3>
        <Link to="/shop">
          <button className="bg-blue-500 p-3 rounded-lg text-white font-semibold tracking-wide hover:bg-blue-800 transition-all duration-200">
            Go to Shop
          </button>
        </Link>
      </div>
    );
  }
  // const myshoes = shoes.filter((shoe) => shoe.isCart);
  const count = myshoes.length;
  const price = myshoes.reduce(
    (accumulator, shoe) => accumulator + shoe.price,
    0
  );
  const discountedPrice = myshoes.reduce(
    (accumulator, shoe) => accumulator + shoe.discount,
    0
  );
  const discount = price - discountedPrice;

  

 const handleCheckout = async() => {
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: myshoes.map((shoe) => ({
        price: shoe.payment,
        quantity: 1,
      })),
      mode: 'payment',
      successUrl: `http://snikrz.web.app/`,
      cancelUrl: `http://snikrz.web.app/cart`,
      customerEmail: 'customer@email.com',
    });
    console.warn(error.message);
  }

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="px-20 xs:px-5 w-full justify-center items-center mb-10 mt-6">
            <h1 className="text-3xl font-semibold flex items-center gap-5">
              Your Orders <FaShoppingBag fontSize={22} />{" "}
            </h1>

            <div className="flex w-full justify-center items-start xs:flex-col">
              <div className="w-[70%] xs:w-full  xs:px-3 py-14 gap-10 flex flex-wrap justify-start xs:justify-center items-center">
                {myshoes.map((shoe, index) => (
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
              <div className="flex flex-col justify-center items-center w-[30%] xs:w-full xs:sticky xs:bottom-0 xs:pb-2 z-50 xs:backdrop-blur-sm">
                <div className="w-full bg-slate-200 p-3 rounded-xl  xs:bg-transparent xs:border xs:border-slate-400 ">
                  <h3 className="text-lg font-semibold text-slate-800">
                    Price Details
                  </h3>
                  <div className="w-full bg-slate-400 h-px my-2" />
                  <div className="w-full flex justify-between items-center">
                    <h3 className=" font-medium mt-2">
                      Price ( {count} item )
                    </h3>
                    <h3 className="font-medium mt-2 mr-1">${price}</h3>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <h3 className=" font-medium mt-2">Discount </h3>
                    <h3 className="font-medium mt-2 mr-1 text-emerald-500">
                      -${discount}
                    </h3>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <h3 className=" font-medium mt-2">Delivery Charges </h3>
                    <h3 className="font-medium mt-2 mr-1 text-emerald-500">
                      <span className="text-slate-500 line-through font-light">
                        $6
                      </span>{" "}
                      Free
                    </h3>
                  </div>
                  <div className="w-full bg-slate-400 h-px my-2" />
                  <div className="w-full flex justify-between items-center">
                    <h3 className="text-lg font-medium mt-2">Total Amount</h3>
                    <h3 className="text-lg font-medium mt-2 mr-1">
                      ${discountedPrice}
                    </h3>
                  </div>
                </div>
                <button onClick={handleCheckout} className="w-full  flex justify-center items-center mt-3 bg-black text-lg font-medium text-white p-3 rounded-xl gap-2 transition-all duration-300 hover:bg-slate-900 hover:tracking-wide hover:shadow-xl">
                  Proceed to Checkout <HiRocketLaunch fontSize={20} />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
