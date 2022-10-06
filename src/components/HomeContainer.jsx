import React from "react";
import delivery from "../img/delivery.png";
import heroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";
import { motion } from "framer-motion";

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex flex-1 flex-col items-start justify-center md:items-start gap-6">
        <div className="flex items-center  justify-censter gap-2 bg-orange-100 px-4  py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 rounded-full bg-white overflow-hidden drop-shadow-xl">
            <img
              src={delivery}
              className="w-full h-full object-cover"
              alt="deliveryImg"
            />
          </div>
        </div>
        <p className="text-[2.5rem] font-bold tracking-wide text-headingColor lg:text-[4.5rem]">
          The Fastest Delivery In
          <span className="text-orange-600 text-[2.5rem] lg:text-[5rem]">
            your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%] ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae quod
          natus facere, aperiam at sequi, molestias dolores hic nulla et, culpa
          recusandae molestiae! Ratione, ad doloribus. Doloremque possimus
          laudantium eius.
        </p>
        <button
          type="button"
          className="w-full md:w-auto bg-gradient-to-br from-orange-400 to-orange-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transtion-all ease-in-out  focus:outline focus:outline-2 focus:outline-orange-500 focus:outline-offset-2 "
        >
          Order Now
        </button>
      </div>

      <div className="py-2  flex-1 flex items-center relative">
        <img
          src={heroBg}
          alt="heroImg"
          className="ml-auto w-full lg:w-auto  h-420 lg:h-685  "
        />

        <div className="h-full w-full absolute top-0 left-0 flex items-center justify-center  py-12 gap-4 flex-wrap lg:px-32">
          {heroData &&
            heroData.map((element) => (
              <div
                key={element.id}
                className=" lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center border-[1px] transition-all duration-800 ease-in-out hover:border-[1px] hover:border-orange-400 drop-shadow-lg"
              >
                <motion.img
                  src={element.imageSrc}
                  className="w-20  lg:w-40 -mt-10 lg:-mt-20"
                  alt="imgOne"
                  whileHover={{ scale: 1.3, rotate: 10 }}
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {element.name}
                </p>
                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {element.desc}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span>
                  {element.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
