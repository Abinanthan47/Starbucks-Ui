import { PiCoffeeBeanFill } from 'react-icons/pi';
const Marquee = () => {
    return (


        <div className="relative flex overflow-x-hidden font-dela uppercase bg-secondary text-dark">
            <div className=" flex py-8 animate-marquee whitespace-nowrap">
                <span className="text-4xl mx-4 flex ">Cappuccino  <PiCoffeeBeanFill className=" mx-2" /></span>
                <span className="text-4xl mx-4 flex">Latte <PiCoffeeBeanFill className=" mx-2" /></span>
                <span className="text-4xl mx-4 flex" >coffee <PiCoffeeBeanFill className=" mx-2" /></span>
                <span className="text-4xl mx-4 flex">doppio <PiCoffeeBeanFill className=" mx-2" /></span>
                <span className="text-4xl mx-4 flex">galao <PiCoffeeBeanFill className=" mx-2" /></span>
                {/* <span className="text-4xl mx-4 flex">mocha <PiCoffeeBeanFill className=" mx-3" /></span> */}
            </div>

            <div className="absolute flex top-0 py-8 animate-marquee2 whitespace-nowrap">
                <span className="text-4xl mx-4 flex">espresso <PiCoffeeBeanFill className=" mx-2" /></span>
                <span className="text-4xl mx-4 flex">macchiato <PiCoffeeBeanFill className=" mx-2" /></span>
                <span className="text-4xl mx-4 flex">americano <PiCoffeeBeanFill className=" mx-2" /></span>
                <span className="text-4xl mx-4 flex">mocha <PiCoffeeBeanFill className=" mx-2" /></span>
                <span className="text-4xl mx-4 flex">drinks <PiCoffeeBeanFill className=" mx-2" /></span>
            </div>
        </div>



    );
}

export default Marquee;
