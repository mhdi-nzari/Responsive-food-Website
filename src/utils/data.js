import imgOne from "../img/i1.png";
import imgTwo from "../img/f1.png";
import imgThree from "../img/c1.png";
import imgFour from "../img/fi1.png";
import { IoFastFood } from "react-icons/io5";
import { MdIcecream, MdLocalCafe, MdLocalPizza, MdLunchDining, MdOutlineCoffee, MdOutlineCoffeeMaker, MdRestaurantMenu } from "react-icons/md";



export const heroData = [
  {
    id: 1,
    name: "Icecream",
    desc: "Chocolate & vanilla ",
    imageSrc: imgOne,
    price: 10.25,
  },
  {
    id: 2,
    name: "Strawberry",
    desc: "Fresh Strawberryies ",
    imageSrc: imgTwo,
    price: 8.22,
  },
  {
    id: 3,
    name: "Chicken Kebab",
    desc: "Mixed Kebab Plate ",
    imageSrc: imgThree,
    price: 1.5,
  },
  {
    id: 4,
    name: "Fish kebab",
    desc: "Mixed Kebab Plate",
    imageSrc: imgFour,
    price: 6.44,
  },
];

export const categories = [
  {
    id: 1,
    name: "chicken",
    urlParamName: "chicken",
    icon: IoFastFood,
  },
  {
    id: 2,
    name: "Curry",
    urlParamName: "beff",
    icon: MdLunchDining,
  },
  {
    id: 3,
    name: "Icecream",
    urlParamName: "Icecream",
    icon: MdIcecream,
  },
  {
    id: 4,
    name: "Tea Shop",
    urlParamName: "fish",
    icon: MdLocalCafe,
  },
  {
    id: 5,
    name: "Pizza",
    urlParamName: "fruits",
    icon: MdLocalPizza,
  },
  {
    id: 6,
    name: "Dinner",
    urlParamName: "iceCreams",
    icon: MdRestaurantMenu,
  },
  {
    id: 7,
    name: "Coffie",
    urlParamName: "deserts",
    icon: MdOutlineCoffee,
  },
  {
    id: 8,
    name: "ُSoft Drinks",
    urlParamName: "Soft Drinks",
    icon: MdOutlineCoffeeMaker,
  },
];
