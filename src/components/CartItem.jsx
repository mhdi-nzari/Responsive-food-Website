import React, { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const CartItem = ({ item  , setFlag, flag }) => {
  const [qty, setQty] = useState(item.qty),
    [items, setItems] = useState([]),
    [{ cartItems }, dispatch] = useStateValue(),


    cartDispatch = () => {
      localStorage.setItem("cartItems", JSON.stringify(items));
      dispatch({
        type: actionType.SET_CARTITEMS,
        cartItems: items,
      });
    },


     updateQty = (action, id) => {
      if (action === "add") {
        setQty(qty + 1);
        cartItems.map((item) => {
          if (item.id === id) {
            item.qty += 1;
            setFlag(flag + 1);
          }
          return null
        });
        cartDispatch();
      } else {
        // initial state value is one so you need to check if 1 then remove it
        let  items = cartItems.filter((item) => item.id !== id);
        if (qty === 1 && items) {
          setFlag(flag + 1);
          cartDispatch();
        } else {
          setQty(qty - 1);
          cartItems.map((item) => {
            if (item.id === id) {
              item.qty -= 1;
              setFlag(flag + 1);
            }
            return null
          });
          cartDispatch();
        }
      }
    };

  useEffect(() => {
    setItems(cartItems);
  }, [qty]);

  return (
    <motion.div
      whileTap={{ scale: 0.9, rotate: -3 }}
      className=" group w-full p-5  px-2 rounded-lg bg-cartItem flex items-center gap-2 hover:bg-white transition-all duration-150 ease-in-out"
    >
      <img
        src={item?.imageURL}
        alt="imgPro"
        className="w-16 h-auto object-cover"
      />

      {/* Name Section */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50 group-hover:text-cartItem font-semibold">
          {item?.title}
        </p>
        <p className="text-sm block text-gray-300 font-semibold group-hover:text-gray-500">
          ${item?.price * qty}
        </p>
      </div>

      {/* button Section */}
      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty("remove", item?.id)}
        >
          <BiMinus className="text-gray-50 group-hover:text-cartItem" />
        </motion.div>
        <p className="w-5 h-5  p-3 roundd-md bg-cartBg text-gray-50 flex items-center justify-center">
          {qty}
        </p>
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty("add", item?.id)}
        >
          <BiPlus className="text-gray-50 group-hover:text-cartItem" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CartItem;
