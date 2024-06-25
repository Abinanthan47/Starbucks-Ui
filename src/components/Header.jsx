import { motion } from 'framer-motion';
import { FaRegStarHalf } from "react-icons/fa";


const Header = () => {
    return (
        <header className=' px-5 py-4 lg:absolute lg:w-full lg:left-0'>
                <div className=' container mx-auto flex flex-col gap-y-6 lg:flex-row h-full justify-between items-center relative '>
                    <a href="#">
                        <h1 className='text-white  ml-5 font-dela text-[20px] font-normal uppercase ' >Starbucks</h1>
                    </a>
                    <nav className=' text-lg font-normal align-center text-white flex gap-4 lg:gap-x-12'>
                        <a href="#">Shop</a>
                        <a href="#">Products</a>
                        <a href="#">Store</a>
                        <a href="#">About</a>
                        <a href="#" >Contact</a>
                    </nav>

                    <motion.button className='bg-white py-2 px-7 font-semibold rounded-full mr-7 mb-5' initial={{ opacity: 0.6 }}
                        whileHover={{
                            backgroundColor: '#F7B41F',
                            transition: { duration: 0.5 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        whileInView={{ opacity: 1 }}>Order now</motion.button>


                </div>

        </header>
    )
}

export default Header;