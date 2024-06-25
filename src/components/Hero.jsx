import { motion } from 'framer-motion';
import { useState } from 'react';
import cup1 from '../assets/cup2.png';
import cup2 from '../assets/cup3.png';
import cup3 from '../assets/cup4.png';
import cup4 from '../assets/cup5.png';
import arrow from '../assets/rrow.png';
import Header from '../components/Header';

const coffee = [
  {
    id: 1,
    name: 'Expresso',
    image: cup1
  },
  {
    id: 2,
    name: 'Frapcino',
    image: cup2
  },
  {
    id: 3,
    name: 'Mangcino',
    image: cup3
  },
  {
    id: 4,
    name: 'Rainbow',
    image: cup4
  },
];

const Hero = () => {
  const [coffeimg, setCoffeimg] = useState(coffee[1]);
  const [cofIndex, setCofIndex] = useState(1);

  const getCofDetails = (id) => {
    const cof = coffee.find((cof) => cof.id === id);
    setCoffeimg(cof);
  };

  return (
    <section className='bg-primary lg:bg-cover lg:bg-no-repeat min-h-screen relative'>
      <Header />
      <div className='flex flex-col lg:flex-row h-full'>
        {/* Centered Section */}
        <div className='flex-1 flex flex-col items-center justify-center mt-6 lg:mt-10 relative'>
          <motion.h1
            className='xl:text-[150px] xl:mt-28 font-medium font-dela text-white text-center mb-16 lg:mb-[300px] uppercase  lg:leading-[120px] text-5xl leading-10 lg:text-6xl'
            key={coffeimg.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {coffeimg.name}<br />YOURSELF
          </motion.h1>

          <motion.img
            src={coffeimg.image}
            className='z-10 absolute  mb-4 h-60 lg:h-[500px] transform rotate-10  lg:left-[42%] jtop-[30%] lg:top-auto'
            alt="Coffee Cup"
            key={coffeimg.image}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>
        <div className=' absolute flex items-end justify-center lg:justify-start top-[35%] lg:top-[65%] left-[50%] lg:left-[65%] opacity-85 '>
          <motion.img src={arrow} alt="Arrow" className=' sm:h-5 h-10 lg:h-20' animate={{ x: -100 }} />
        </div>
        <div className='absolute flex flex-col items-start top-[60%] lg:top-[65%] w-80 lg:w-96 opacity-85 mx-4 lg:ml-32 text-justify text-white'>
          <p className='text-sm  lg:text-base'>Crafted to provide a delightful experience, Starbucks® Blonde Roast coffees are meticulously curated to deliver a lighter and smoother body, inviting a gentle awakening of the senses with each sip.</p>
        </div>
        <div className='absolute flex items-center top-[75%] lg:top-[85%] mx-4 lg:ml-32'>
          <motion.button
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          />
          <motion.button
            className='bg-white py-2 px-5 lg:px-7 font-semibold rounded-full'
            initial={{ opacity: 0.6 }}
            whileHover={{
              backgroundColor: '#F7B41F',
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
            Add to cart
          </motion.button>
        </div>

        {/* Coffee List Section */}
        <div className='flex flex-row lg:flex-col items-center justify-center py-8 px-4 lg:px-8 lg:mr-6 w-full lg:w-auto'>
          <div className='flex flex-row lg:flex-col gap-4 mt-5'>
            {coffee.map((cof, index) => (
              <div
                onClick={() => {
                  getCofDetails(cof.id);
                  setCofIndex(index);
                }}
                className='cursor-pointer relative flex flex-col items-center'
                key={index}
              >
                <div className={`w-full h-full absolute rounded-full ${cofIndex === index ? '' : ''}`}></div>
                <img src={cof.image} draggable='false' alt={cof.name} className=" h-16 xl:h-[115px] mr-7  md:w-20 md:h-20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
