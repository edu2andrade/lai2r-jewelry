import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import hamburguerReducer from "./hamburguer/hamburguer.reducer";

export default combineReducers({
  user: userReducer, 
  cart: cartReducer,
  hamburguer: hamburguerReducer
})