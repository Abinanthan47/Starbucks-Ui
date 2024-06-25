import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiCoffeeBeanFill } from 'react-icons/pi';
import { IoLogoApple } from "react-icons/io5";

const Footer = () => {
    return (
        <div className="bg-[#014636]  h-auto xl:min-h-screen relative overflow-hidden">
            <div className='text-center uppercase font-dela text-dark'>
                <div className="z-20 absolute flex py-8 bg-secondary text-center align-middle whitespace-nowrap rotate-3 mt-32">
                    <span className="text-4xl mx-4 flex"> Order now <PiCoffeeBeanFill className="mx-2 opacity-50" /></span>
                    <span className="text-4xl mx-4 flex">Order now<PiCoffeeBeanFill className="mx-2 opacity-50" /></span>
                    <span className="text-4xl mx-4 flex">Order now <PiCoffeeBeanFill className="mx-2 opacity-50" /></span>
                    <span className="text-4xl mx-4 flex">Order now <PiCoffeeBeanFill className="mx-2 opacity-50" /></span>
                    <span className="text-4xl mx-4 flex">Order now <PiCoffeeBeanFill className="mx-2 opacity-50" /></span>
                </div>
            </div>
            {/* Adding the footer component here */}


            <div className="max-w-2xl mx-auto my-auto text-white mt-72 xl:mt-96">
                <div className="text-center">
                    <h3 className="text-2xl xl:text-5xl mb-3 font-medium font-dela uppercase"> Download Our  App </h3>
                    <p className='font-semibold xl:text-2xl xl:mt-8'> Coffee. All day, every day. </p>
                    <div className="flex justify-center my-10">
                        <div className="flex items-center border border-white rounded-lg px-4 py-2 w-auto mx-2">
                            <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" alt="Google Play Store" className="w-7 md:w-8" />
                            <div className="text-left ml-3 w-full">
                                <p className="text-xs text-white">Download on </p>
                                <p className="text-sm md:text-base"> Google Play Store </p>
                            </div>
                        </div>
                        <div className="flex items-center border border-white w-auto rounded-lg px-4 py-2  mx-2">
                        <IoLogoApple  className="w-8 h-8 md:w-8" />
                            <div className="text-left ml-3">
                                <p className="text-xs text-white">Download on </p>
                                <p className="text-sm md:text-base"> Apple Store </p>
                            </div>
                        </div>

                    </div>
                    <div className="w-full justify-center   flex flex-col ">

                        <ul className='flex  gap-x-5 justify-center '>
                            <li><a href="#facebook"><FaInstagram className='h-7' /></a></li>
                            <li><a href="#twitter"><BsFacebook className='h-7' /></a></li>
                            <li><a href="#instagram"><FaXTwitter className='h-7' /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-5 flex flex-col justify-center md:flex-row md:justify-center items-center text-sm text-gray-200">
                    <p className="mb-3"> &copy; ABINANTHAN, 2024. </p>

                </div>
            </div>
        </div>


    );
};

export default Footer;
