import React from "react";
import InstaCard from "./InstaCard";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full pb-20 flex justify-evenly items-center bg-orange-100 flex-col">
      <div className="w-full flex h-screen-100 justify-center items-center mb-8 bg-img-shoe">
        <div className="w-full flex h-screen-100 justify-center items-center bg-black/50 overflow-x-hidden">
          <motion.p
            initial={{ x: -1000 }} // Initial state (start off-screen to the left)
            animate={{ x: 0, opacity: 1 }} // Animation state (move to the center and become visible)
            exit={{ x: 1000, opacity: 0 }} // Exit animation (move off-screen to the right)
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 8,
            }}
            className="text-[10em] xs:text-5xl tracking-widest font-bold text-white"
          >
            ABOUT US
          </motion.p>
        </div>
      </div>
      <div className="flex w-full justify-evenly items-center xs:flex-col">
        <InstaCard
          classn="mb-[-80px] xs:mb-5"
          text="Your Path, Our Passion"
          video="https://firebasestorage.googleapis.com/v0/b/plantnet-d209c.appspot.com/o/shoe%20images%2Fpexels-cottonbro-5274888%20(2160p).mp4?alt=media&token=5b2f8346-3df9-4e55-8345-e3d35b89dce9"
          title="Our Motto"
        />
        <InstaCard
        classn="xs:mb-5"
          text="WE ARE SNIKRZ"
          video="https://firebasestorage.googleapis.com/v0/b/plantnet-d209c.appspot.com/o/shoe%20images%2Fproduction_id_4380323%20(1080p).mp4?alt=media&token=98a01a02-3837-4f9e-b551-1b0cd255e8c2"
          title="Who Are We"
        />
        <InstaCard
          classn="mb-[-80px] xs:mb-1"
          text="Comfort, Style & Authenticity"
          video="https://firebasestorage.googleapis.com/v0/b/plantnet-d209c.appspot.com/o/shoe%20images%2Fpexels-anna-nekrashevich-8055973%20(2160p).mp4?alt=media&token=bb655a80-0897-4429-9e2d-ab39990bea45"
          title="Our Vision"
        />
      </div>
    </div>
  );
};

export default About;
