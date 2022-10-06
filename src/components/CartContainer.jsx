import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { MdOutlineRefresh } from "react-icons/md";
import { BiLogIn} from "react-icons/bi";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import EmptyCart from "../img/emptyCart.svg";
import CartItem from "./CartItem";

const CartContainer = () => {
  const [{ cartShow, cartItems , user }, dispatch] = useStateValue(),
   [flag, setFlag] = useState(1),
   [tot, setTot] = useState(0),

    showCart = () => {
      dispatch({
        type: actionType.SET_CART_SHOW,
        cartShow: !cartShow,
      });
    };


    useEffect(() => {
     let totalPrice = cartItems.reduce(function (accumulator, item) {
       return accumulator + item.qty * item.price;
     }, 0);
     setTot(totalPrice);
   }, [tot, flag]);


    const  clearCart = (e) => {
      dispatch({
          type:actionType.SET_CARTITEMS , 
          cartItems : [],
      })
      localStorage.setItem('cartItems' , JSON.stringify([]))
    };


  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0.5, x: 200 }}
      className="fixed top-0  right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101] "
    >
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }} onClick={showCart}>
          <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
        </motion.div>
        <p className="text-textColor text-lg font-semibold">Cart</p>
        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base" onClick={clearCart}
        >
          Clear <MdOutlineRefresh />
        </motion.p>


      </div>
      {/* Bottom Section */}
      {cartItems && cartItems.length > 0 ? (
        <div className="w-full h-full bg-cartBg rounded-t-[2rem]  flex flex-col">
          {/* cart Item Section*/}
          <div className="w-full h-340 md:h-42 px-8 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
            {/* cart Item */}
            {cartItems &&
              cartItems.map((item) => (
               <CartItem key={item.id}
               item={item}
               setFlag={setFlag}
               flag={flag}/>
              ))}
          </div>

          {/* cartTotal Section */}
          <div className="w-full  flex-1 bg-cartTotal  rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
            <div className="w-full flex items-center justify-between">
              <p className=" text-gray-400 text-lg">Sub Total</p>
              <p className=" text-gray-400 text-lg">$ {tot}</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className=" text-gray-400 text-lg">Dilevry</p>
              <p className=" text-gray-400 text-lg">$ 2.5</p>
            </div>
            <div className="w-full border-b border-gray-600 my-2"></div>
            <div className="w-full flex  items-center justify-between">
              <p className="text-gray-200 text-xl font-semibold">Total</p>
              <p className="text-green-500 text-xl font-semibold">${tot + 2.5}</p>
            </div>

     {
          user ? (
               <motion.button
               type="button"
               whileTap={{ scale: 0.8 }}
               className="w-full p-2 rounded-full bg-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg  transition-all duration-150 ease-in-out"
             >
               Checkout
             </motion.button>
          ) :(
               <motion.button
               type="button"
               whileTap={{ scale: 0.8 }}
               className="w-full  flex items-center justify-center text-center gap-x-4 p-2 rounded-full bg-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg  transition-all duration-150 ease-in-out"
             >
               Login To Checkout <BiLogIn className="text-2xl"/>
             </motion.button> 
          )}
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <img src={EmptyCart} className="w-300" alt="emptyCart" />
          <p className="text-xl text-textColor font-semibold">
            Add some Items to Your Cart
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default CartContainer;
