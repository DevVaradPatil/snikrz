import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const CarouselCard = ({clr, title, subtitle, description, pic}) => {
  return (
    <div className={`mx-3 ${clr === '1'? ' bg-orange-200' : clr === '2' ? ' bg-yellow-300' : 'bg-green-300'} h-[450px] text-black flex relative justify-between xs:justify-normal overflow-hidden rounded-[50px] xs:rounded-[25px] xs:flex-col xs:flex-[650px]`}>
      <div className='flex p-20 xs:p-5 justify-start items-start w-[60%] xs:w-full flex-col xs:h-[40%]'>
        <h2 className='font-normal text-4xl md:text-6xl mb-2 md:mb-3 xs:text-2xl xs:mb-1'>{subtitle}</h2>
        <h1 className='font-bold text-4xl md:text-6xl mb-2 md:mb-3 xs:text-3xl xs:mb-1'>{title}</h1>
        <p className='font-medium text-gray-700 text-xl md:text-2xl mb-3 md:mb-4 xs:text-lg xs:mb-2'>
          {description}
        </p>
        <Link to='/shop'>
        <button className='mt-4 md:mt-5 bg-black text-yellow-400 flex justify-center items-center p-4 md:p-5 py-3 md:py-4 rounded-[35px] shadow-lg text-lg tracking-wider gap-2 hover:bg-yellow-400 hover:text-black hover:scale-105 transition-all duration-300 xs:text-base xs:mt-2 xs:p-3'>
          Discover <FaArrowRightLong />
        </button>
        </Link>
      </div>
  
      <img src={pic} alt="" className='mt-4 md:mt-0 md:ml-4 xs:mt-0 xs:scale-75 xs:absolute xs:right-[-20%] xs:bottom-[-20%]' />
    </div>
  );
};

export default CarouselCard;
