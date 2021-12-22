import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage!

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import hamburguerReducer from "./hamburguer/hamburguer.reducer";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  hamburguer: hamburguerReducer,
});

export default persistReducer(persistConfig, rootReducer);
