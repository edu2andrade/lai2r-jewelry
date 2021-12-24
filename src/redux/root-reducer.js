import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import hamburguerReducer from "./hamburguer/hamburguer.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whiteList: ["cart"], // Only cart will be persisted
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  hamburguer: hamburguerReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
