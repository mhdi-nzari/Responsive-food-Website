import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import notFound from "../img/NotFound.svg";
const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef(),
  

   [items, setItems] = useState([]),
   [{ cartItems }, dispatch] = useStateValue(),
 
    addtocart = () => {
     dispatch({
       type: actionType.SET_CARTITEMS,
       cartItems: items,
     });
     localStorage.setItem("cartItems", JSON.stringify(items));
   };
  useEffect(() => {
     addtocart();
   }, [items]);
  


  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center my-12 bg-rowBg gap-10 scroll-smooth   ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <motion.div
            whileHover={{ translateY: -15 }}
            key={item?.id}
            className="w-275 h-175  min-w-[275px] md:w-375 md:min-w[300px] bg-cardOverlay rounded-lg p-4 my-12  backdrop-blur-xl hover:drop-shadow-xl flex flex-col items-center justify-between"
          >
            <div className="w-full flex items-center justify-between">
              <motion.img
                whileHover={{ scale: 1.2, rotate: 10 }}
                className=" h-150 object-cover  -mt-8 drop-shadow-2xl "
                src={item?.imageURL}
                alt={item?.imageURL}
              />
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-pink-700 flex items-center justify-center cursor-pointer hover:shadow-md"
                onClick={() => setItems([...cartItems, item])}
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>
            <div className="w-full flex flex-col  items-end justify-end">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {item?.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {item?.calories}
                Calories
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-textColor font-semibold ">
                  <span className="text-sm text-red-500">$</span>
                  {item?.price}
                </p>
              </div>
            </div>
          </motion.div>
        ))
      ) : (
        <div className="w-full flex flex-col gap-2 items-center justify-center">
          <img src={notFound} alt="NotFound Img" className="h-340 my-20" />
          <p className="bg-orange-300 p-4 rounded-lg text-white w-48 ">
            Items Not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
