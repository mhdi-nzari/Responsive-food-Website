import React, { useEffect, useState } from "react";
import HomeContainer from "./HomeContainer";
import MenuContainer from "./MenuContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import CartContainer from "./CartContainer";
const MainContainer = () => {
  const [{ foodItems , cartShow}, dispatch] = useStateValue(),
    [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue , cartShow]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />

      <section className="w-full my-6">
        <div className="w-full flex items-center justify-center">
          <div className="w-full flex items-center justify-between">
            <p className="text-2xl font-semibold capitalize text-textColor relative before:absolute before:rounded-lg before:content before:w-36 before:h-1 before:-bottom-4 before:left-0 before:bg-gradient-to-tr before:bg-orange-400 transition-all ease-in-out duration-100">
              Our Fresh & healthy fruits
            </p>
            <div className="hidden md:flex gap-3 items-center">
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500   flex items-center justify-center cursor-pointer   hover:shadow-lg"
                onClick={() => setScrollValue(-200)}
              >
                <MdChevronLeft className="text-white w-5 h-5" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500    flex items-center justify-center cursor-pointer   hover:shadow-lg"
                onClick={() => setScrollValue(200)}
              >
                <MdChevronRight className="text-white w-5 h-5" />
              </motion.div>
            </div>
          </div>
        </div>
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={foodItems?.filter((item) => item.category === "fruits")}
        />
      </section>

      <MenuContainer />
      {cartShow && <CartContainer />}
    </div>
  );
};

export default MainContainer;
