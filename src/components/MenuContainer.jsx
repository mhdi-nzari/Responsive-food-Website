import { motion } from "framer-motion";
import React, { useState } from "react";
import { useStateValue } from "../context/StateProvider";

import { categories } from "../utils/data";
import RowContainer from "./RowContainer";
const MenuContainer = () => {
  const [filter, setFilter] = useState("chicken"),
    [{ foodItems }, dispatch] = useStateValue();
  return (
    <section className="w-full my-6 " id="menu">
      <div className="w-full flex flex-col gap-y-8 items-center justify-center">
        <p className="text-2xl font-semibold capitalize text-textColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-4 before:left-0  before:bg-gradient-to-tr before:bg-orange-400 transition-all ease-in-out duration-100 mr-auto">
          Our Hot Dishes
        </p>
        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
          {categories &&
            categories.map((item) => (
              <motion.div
                whileHover={{ translateY: -10 }}
                whileTap={{ scale: 0.5 }}
                key={item.id}
                className={`group ${
                  filter === item.urlParamName ? " bg-orange-500" : "bg-white"
                } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3  items-center justify-center transition-all  duration-150 ease-in-out  hover:bg-orange-500`}
                onClick={() => setFilter(item.urlParamName)}
              >
                <div
                  className={`w-10 h-10 rounded-full shadow-lg ${
                    filter === item.urlParamName ? "bg-white" : "bg-orange-500"
                  }  group-hover:bg-white flex items-center justify-center`}
                >
                  <item.icon
                    className={` group-hover:text-textColor text-lg ${
                      filter === item.urlParamName
                        ? "text-gray-400"
                        : "text-white"
                    }`}
                  />
                </div>
                <p
                  className={`text-sm ${
                    filter === item.urlParamName
                      ? "text-white"
                      : "text-textColor"
                  } group-hover:text-white`}
                >
                  {item.name}
                </p>
              </motion.div>
            ))}
        </div>
        <div className="w-full h-screen">
        <RowContainer
            flag={false}
            data={foodItems?.filter((n) => n.category === filter)}
          />
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
