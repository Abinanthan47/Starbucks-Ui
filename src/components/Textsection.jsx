import { motion } from 'framer-motion';
import coffee1 from '../assets/coffee1.jpeg'; // Replace with actual paths to your images
import coffee2 from '../assets/coffee2.jpg';
import coffee3 from '../assets/coffee3.jpg';
import coffee4 from '../assets/coffee4.jpg';
import coffee5 from '../assets/coffee6.jpg';
import coffee6 from '../assets/coffee7.jpeg';

const CoffeeBanner = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const imgVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    };

    const hoverVariants = {
        hover: {
            scale: 1.1,
            transition: { duration: 0.3 },
        }
    };

    const textHoverVariants = {
        hover: {
            color: '#F7B41F',
            transition: { duration: 0.3 },
        }
    };

    return (
        <motion.div
            className="bg-[#014636] text-[#F3E9D2] h-auto xl:min-h-screen font-dela flex items-center justify-center p-4 sm:p-8 leading-tight uppercase "
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="max-w-[1200px] text-justify text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-[80px] mb-5">
                <motion.h1 className="font-normal mt-3 " variants={itemVariants} whileHover="hover">
                    USE <motion.span variants={imgVariants} whileHover="hover">
                        <motion.img
                            src={coffee2}
                            className="inline-block h-[30px] w-[90px] sm:h-[40px] md:h-[50px] lg:h-[60px] xl:w-[250px] rounded-full object-cover shrink align-middle"
                            alt="Premium"
                            variants={hoverVariants}
                        />
                    </motion.span> 
                    <motion.span variants={textHoverVariants}> Premium</motion.span>
                </motion.h1>
                <motion.div className="" variants={itemVariants} whileHover="hover">
                    ARABICA <motion.span variants={imgVariants} whileHover="hover">
                        <motion.img
                            src={coffee3}
                            className="inline-block h-[30px] w-[5z0px] sm:h-[40px] md:h-[50px] lg:h-[60px] xl:w-[140px] rounded-full object-cover align-middle"
                            alt="Beans"
                            variants={hoverVariants}
                        />
                    </motion.span> 
                    <motion.span variants={textHoverVariants}> Beans</motion.span>
                </motion.div>
                <motion.div className="" variants={itemVariants} whileHover="hover">
                    And <motion.span variants={imgVariants} whileHover="hover">
                        <motion.img
                            src={coffee1}
                            className="inline-block h-[30px] w-[105px] sm:h-[40px] md:h-[50px] lg:h-[60px] xl:w-[290px] rounded-full object-cover align-middle"
                            alt="Freshly"
                            variants={hoverVariants}
                        />
                    </motion.span> 
                    <motion.span variants={textHoverVariants}> Freshly</motion.span>
                </motion.div>
                <motion.div className="" variants={itemVariants} whileHover="hover">
                    GROUND <motion.span variants={imgVariants} whileHover="hover">
                        <motion.img
                            src={coffee4}
                            className="inline-block h-[30px] w-[30px] sm:h-[40px] md:h-[50px] lg:h-[60px] xl:w-[60px] rounded-full object-cover align-middle"
                            alt="Species"
                            variants={hoverVariants}
                        />
                    </motion.span> 
                    <motion.span variants={textHoverVariants}> SPECIES</motion.span>
                </motion.div>
                <motion.div className="" variants={itemVariants} whileHover="hover">
                    TO <motion.span variants={imgVariants} whileHover="hover">
                        <motion.img
                            src={coffee5}
                            className="inline-block h-[30px] sm:h-[40px] md:h-[50px] lg:h-[60px] w-auto rounded-full object-cover align-middle"
                            alt="Achieve"
                            variants={hoverVariants}
                        />
                    </motion.span> 
                    <motion.span variants={textHoverVariants}> ACHIEVE  </motion.span> 
                    <motion.span variants={imgVariants} whileHover="hover">
                        <motion.img
                            src={coffee6}
                            className="inline-block h-[30px] w-[40px] sm:h-[40px] md:h-[50px] lg:h-[60px] xl:w-[120px] rounded-full object-cover align-middle"
                            alt="An"
                            variants={hoverVariants}
                        />
                    </motion.span> 
                    <motion.span variants={textHoverVariants}> AN</motion.span>
                </motion.div>
                <motion.div className="" variants={itemVariants} whileHover="hover">
                    <motion.span variants={textHoverVariants}>UNDENIABLY</motion.span><span className="text-secondary">↗</span> <motion.span variants={textHoverVariants}>rich</motion.span>
                </motion.div>
                <motion.div className="" variants={itemVariants} whileHover="hover">
                    <motion.span variants={textHoverVariants}>FLAVours</motion.span> <span>&nbsp;</span><motion.span variants={textHoverVariants}>coffee</motion.span>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default CoffeeBanner;
