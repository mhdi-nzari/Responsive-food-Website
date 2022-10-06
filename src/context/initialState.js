import { fetchCart, fetchUser } from "../utils/fetchLocalStorgeData";

const userInfo = fetchUser(),
  cartInfo = fetchCart();

export const initialState = {
  user: userInfo,
  foodItems: null,
  cartShow: false,
  cartItems: cartInfo,
};
