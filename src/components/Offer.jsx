import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import { BsTags } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'
import {  BiSolidOffer } from 'react-icons/bi'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Offer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once when it comes into view
    threshold: 0.5, // Adjust the threshold as needed
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state, hidden below and invisible
    visible: { opacity: 1, y: 0 }, // Visible state, animating from below and becoming visible
  };

  return (
    <motion.div
      className="mx-20 xs:mx-3 bg-emerald-300 flex flex-col justify-center items-center p-10 xs:p-4 pt-6 my-10 mt-16 xs:mt-10 rounded-3xl"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Conditionally apply animation
      variants={containerVariants}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h1 className='text-6xl font-semibold xs:text-4xl xs:mt-3'>What we offer ?</h1>
      </div>
      <div className='flex justify-center items-center mt-10 gap-5 flex-wrap'>
        <div className='flex flex-col justify-center w-[300px] xs:w-[250px] xs:scale-90 items-center bg-slate-50/70 p-7 rounded-xl gap-4 shadow-lg hover:bg-slate-50/50 transition-all duration-300'>
          <TbTruckDelivery fontSize={50}/>
          <h3 className='text-2xl font-medium xs:text-xl text-center'>Fast Delivery</h3>
        </div>
        <div className='flex flex-col justify-center w-[300px] xs:w-[250px] xs:scale-90 items-center bg-slate-50/70 p-7 rounded-xl gap-4 shadow-lg hover:bg-slate-50/50 transition-all duration-300'>
          <BsTags fontSize={50}/>
          <h3 className='text-2xl font-medium xs:text-xl text-center'>15 days easy return</h3>
        </div>
        <div className='flex flex-col justify-center w-[300px] xs:w-[250px] xs:scale-90 items-center bg-slate-50/70 p-7 rounded-xl gap-4 shadow-lg hover:bg-slate-50/50 transition-all duration-300'>
          <FaLocationDot fontSize={50}/>
          <h3 className='text-2xl font-medium xs:text-xl text-center'>Available 24/7</h3>
        </div>
        <div className='flex flex-col justify-center w-[300px] xs:w-[250px] xs:scale-90 items-center bg-slate-50/70 p-7 rounded-xl gap-4 shadow-lg hover:bg-slate-50/50 transition-all duration-300'>
          <BiSolidOffer fontSize={50}/>
          <h3 className='text-2xl font-medium xs:text-xl text-center'>Exciting offers</h3>
        </div>
      </div>
    </motion.div>
  )
}

export default Offer
