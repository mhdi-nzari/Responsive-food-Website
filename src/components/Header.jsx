import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";

import logo from "../img/logo.png";
import avatar from "../img/avatar.png";
import {
  MdShoppingBasket,
  MdAdd,
  MdLogout,
  MdOutlineHome,
  MdOutlineMenuBook,
  MdOutlineHelpOutline,
  MdElectricalServices,
} from "react-icons/md";

const Header = () => {
  const firebaseAuth = getAuth(app),
    provider = new GoogleAuthProvider(),
    [{ user, cartShow, cartItems }, dispatch] = useStateValue(),
    [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  //   logout Event
  const logout = () => {
      setIsMenu(false);
      localStorage.clear();

      dispatch({
        type: actionType.SET_USER,
        user: null,
      });
    },
    showCart = () => {
      dispatch({
        type: actionType.SET_CART_SHOW,
        cartShow: !cartShow,
      });
    };
  return (
    <header className="bg-primary fixed z-50 w-screen  p-3 px-4 md:p-6 md:px-16 shadow-lg">
      {/* desktop and tablet  */}

      <div className="hidden md:flex w-full h-full items-center justify-between  ">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8 "
          >
            <Link to={"/"}>
              <motion.li
                whileHover={{ translateX: 5 }}
                className="text-base text-textColor hover:text-headingColor cursor-pointer duration-150 transition-all ease-out"
              >
                Home
              </motion.li>
            </Link>
            <Link to={"/createItem"}>
              <motion.li
                whileHover={{ translateX: 5 }}
                className="text-base text-textColor hover:text-headingColor cursor-pointer duration-150 transition-all ease-out"
              >
                Add Item
              </motion.li>
            </Link>
            <motion.li
              whileHover={{ translateX: 5 }}
              className="text-base text-textColor hover:text-headingColor cursor-pointer duration-150 transition-all ease-out"
            >
              About Us
            </motion.li>
            <motion.li
              whileHover={{ translateX: 5 }}
              className="text-base text-textColor hover:text-headingColor cursor-pointer duration-150 transition-all ease-out"
            >
              Services
            </motion.li>
          </motion.ul>
          {/* Cart Information */}
          <div
            className="relative flex items-center justify-center"
            onClick={showCart}
          >
            <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
            {cartItems && cartItems.length > 0 && (
              <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold">
                  {cartItems.length}
                </p>
              </div>
            )}
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              alt="userProfile"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="absolut top-12 right-0 w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute "
              >
                {user && user.email === "mahdi.nazari.gb008@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p className="px-4 py-2 flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
                <p className="px-4 py-2 flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
                  Lagout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full ">
        <div
          className="relative flex items-center justify-center"
          onClick={showCart}
        >
          <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
          {cartItems && cartItems.length > 0 && (
            <div className="w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center absolute -top-2 -right-2">
              <p className="text-xs text-white font-semibold">
                {cartItems.length}
              </p>
            </div>
          )}
        </div>
        <Link to={"/"} className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            alt="userProfile"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="absolut top-12 right-0 w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute "
            >
              {user && user.email === "mahdi.nazari.gb008@gmail.com" && (
                <Link to={"/createItem"}>
                  <p className="px-4 py-2 flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
                    New Item <MdAdd />
                  </p>
                </Link>
              )}

              <ul className="flex flex-col  ">
                <li
                  className="flex items-center justify-between text-base text-textColor hover:text-headingColor cursor-pointer duration-150 transition-all ease-out border-b-2 border-slate-100 px-4 py-4 hover:bg-slate-200 "
                  onClick={() => setIsMenu(false)}
                >
                  Home <MdOutlineHome />
                </li>
                <li
                  className="flex items-center justify-between text-base text-textColor hover:text-headingColor cursor-pointer duration-150 transition-all ease-out border-b-2 border-slate-100 px-4 py-4 hover:bg-slate-200 "
                  onClick={() => setIsMenu(false)}
                >
                  Menu <MdOutlineMenuBook />
                </li>
                <li
                  className="flex items-center justify-between text-base text-textColor hover:text-headingColor cursor-pointer duration-150 transition-all ease-out border-b-2 border-slate-100 px-4 py-4 hover:bg-slate-200 "
                  onClick={() => setIsMenu(false)}
                >
                  About Us <MdOutlineHelpOutline />
                </li>
                <li
                  className="flex items-center justify-between text-base text-textColor hover:text-headingColor cursor-pointer duration-150 transition-all ease-out border-b-2 border-slate-100 px-4 py-4 hover:bg-slate-200 "
                  onClick={() => setIsMenu(false)}
                >
                  Services
                  <MdElectricalServices />
                </li>
              </ul>
              <p
                className="  flex items-center justify-center gap-3 cursor-pointer rounded-md shadow-lg m-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
                onClick={logout}
              >
                Lagout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
