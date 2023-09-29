import React from "react";
import shoe from "../assets/shoes/shoe2.png";
import { BiDotsVerticalRounded } from "react-icons/bi";
import PropTypes from "prop-types";
import { BsHeart, BsChatRight, BsSend, BsBookmark } from "react-icons/bs";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cardVariants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    rotate: -7,
    opacity: 1,
    transition: {
      type: "just",
      bounce: 0.5,
      duration: 0.3,
    },
  },
};

const InstaCard = ({ classn, video, text, title }) => {
  const [isOnscreen, setIsOnscreen] = React.useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once when it comes into view
  });

  React.useEffect(() => {
    if (inView) {
      setIsOnscreen(true);
    }
  }, [inView]);
  return (
    <motion.div
      initial="offscreen"
      animate={isOnscreen ? "onscreen" : "offscreen"}
      variants={cardVariants}
      ref={ref}
      className={`w-[300px] h-[400px] xs:w-[70vw] bg-white rounded-[1.5em] shadow-md flex justify-center items-start flex-col transition-all duration-300 hover:shadow-2xl hover:scale-105 ${classn}`}
    >
      <div className="p-4 pb-2 w-full flex justify-between items-center">
        <div className="flex gap-2 justify-center items-center">
          <img
            src={shoe}
            alt="pfp"
            className="w-10 h-10 rounded-full bg-black"
          />
          <p className="font-semibold">{title}</p>
        </div>
        <div>
          <BiDotsVerticalRounded />
        </div>
      </div>
      {/* <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" alt=""  className='object-cover w-full h-full'/> */}
      <div className="h-[70%] w-full relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full transition-all 0.2s ease hover:object-none"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-semibold">
          {text}
        </p>
      </div>
      <div className="h-[15%] w-full flex justify-between items-center px-5">
        <div className="flex items-center w-full gap-3 ">
          <BsHeart fontSize={20} />
          <BsChatRight fontSize={20} />
          <BsSend fontSize={20} />
        </div>
        <BsBookmark fontSize={20} />
      </div>
    </motion.div>
  );
};

InstaCard.propTypes = {
  classn: PropTypes.string,
};

export default InstaCard;
