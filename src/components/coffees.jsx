import { motion } from 'framer-motion';
import React, { useState } from 'react';
import starbucks from '../assets/sblogo.png';

import cofimg1 from '../assets/cf1.png';
import cofimg2 from '../assets/cf2.png';
import cofimg4 from '../assets/cf3.png';
import cofimg3 from '../assets/cf4.png';

const coffeeimg = [
  {
    id: 1,
    name: 'Choco Pannini',
    image: cofimg1,
  },
  {
    id: 2,
    name: 'Choco Lattee',
    image: cofimg2,
  },
  {
    id: 3,
    name: 'Strawberry Lattee',
    image: cofimg3,
  },
  {
    id: 4,
    name: 'Coffee Lattee',
    image: cofimg4,
  },
];

const Section2 = () => {
  const [cofimg] = useState(coffeeimg);

  return (
    <div className='bg-[#FBEEE5] h-auto xl:min-h-screen  w-full py-12'>
      {/* Logo and Header */}
      <div className='relative flex flex-col lg:flex-row items-center lg:justify-end px-8 lg:px-48'>
        <motion.img
          src={starbucks}
          alt="Starbucks Logo"
          className='h-20 lg:h-28 mb-4 lg:mb-0'
          animate={{ rotate: 360 }}
          transition={{ ease: 'linear', duration: 4, repeat: Infinity }}
        />
        <h1 className=' text-2xl w-full  text-center flex-col md:text-3xl lg:text-[80px] mx-40 uppercase font-normal text-primary top-9 justify-end items-end  font-dela leading-tight'>Our Coffee</h1>
      </div>

      {/* Coffee Items */}
      <div className='flex justify-center mt-10 px-4 lg:px-8'>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-20'>
          {cofimg.map((cof) => (
            <div key={cof.id} className='flex flex-col items-center text-center'>
              <motion.img
                src={cof.image}
                alt={cof.name}
                className='h-48 w-40 sm:h-52 sm:w-44 md:h-56 md:w-48 lg:h-64 lg:w-52 object-contain'
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.5 },
                }}
              />
              <p className='mt-2 text-lg font-semibold'>{cof.name}</p>
              <div className='flex justify-center items-center mt-5'>
                <motion.button
                  className='bg-primary text-white font-medium px-6 py-2 rounded-full'
                  whileHover={{
                    backgroundColor: '#F7B41F',
                    color: '#000',
                    transition: { duration: 0.3 },
                  }}
                >
                  Buy Now
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section2;
