import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutCard = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once when it comes into view
  });

  const [cardAnimated, setCardAnimated] = useState(false);
  const [div1Animated, setDiv1Animated] = useState(false);
  const [div2Animated, setDiv2Animated] = useState(false);

  useEffect(() => {
    if (inView && !cardAnimated) {
      // Animate the card to come from the left
      setCardAnimated(true);
    }
  }, [inView, cardAnimated]);

  useEffect(() => {
    if (cardAnimated && !div1Animated) {
      // Animate the first div (image) to come from below
      setDiv1Animated(true);
    }
  }, [cardAnimated, div1Animated]);

  useEffect(() => {
    if (div1Animated && !div2Animated) {
      // Animate the second div (content) to come from the right
      setDiv2Animated(true);
    }
  }, [div1Animated, div2Animated]);

  return (
    <motion.div
      className="mx-20 xs:mx-3 bg-[#C7BED9] pb-0 flex xs:flex-col-reverse justify-center items-center p-10 xs:p-4 pt-6 xs:pt-6 my-10 xs:pb-0 rounded-3xl"
      ref={ref}
      initial={{ x: -100, opacity: 0 }}
      animate={cardAnimated ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => {
        // When the card animation completes, trigger the animation of the first div (image)
        if (cardAnimated && !div1Animated) {
          setDiv1Animated(true);
        }
      }}
    >
      <motion.div
        className="w-[50%] xs:w-full flex justify-center items-center"
        initial={{ y: 50, opacity: 0 }}
        animate={div1Animated ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.35, duration: 0.4 }}
        onAnimationComplete={() => {
          // When the first div (image) animation completes, trigger the animation of the second div (content)
          if (div1Animated && !div2Animated) {
            setDiv2Animated(true);
          }
        }}
      >
        <img
          src="https://img.freepik.com/free-photo/model-wearing-purple-sneakers-women-s-apparel_53876-97173.jpg?w=360&t=st=1694538678~exp=1694539278~hmac=9503907feb7f4d1b695b40062fce3c3d45aeb1c86f4f02aeece09e6cf7beb97b"
          alt=""
        />
      </motion.div>
      <motion.div
        className="w-[50%] xs:w-full pr-5 xs:pr-0"
        initial={{ x: 50, opacity: 0 }}
        animate={div2Animated ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: 0.35, duration: 0.4 }}
      >
        <h4 className="font-bold text-lg">ABOUT US</h4>
        <h2 className="font-medium text-6xl leading-snug xs:text-4xl">
          Where Your Feet Find Fashion.
        </h2>
        <p className="mt-5 text-slate-700 xs:mt-3">
          Discover a world of footwear wonders at our store. From timeless
          classics to trendy must-haves, we curate the perfect pair for every
          step of your journey. Step in and step out in style!
        </p>
        <button className="mt-5 text-lg flex justify-center items-center gap-3 bg-violet-600 text-white p-4 rounded-xl tracking-wider transition-transform transform hover:scale-105 hover:bg-violet-400 hover:text-gray-100 xs:text-base xs:p-3 xs:tracking-wide xs:gap-2">
          Explore More <FaArrowRightLong />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default AboutCard;
