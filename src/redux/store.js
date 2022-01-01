import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
// redux-persist --> local and session Storage, allows our browser to actually caches the store
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Create a new 'persisted' version of our store
export const persistor = persistStore(store);

// assign the object to a variable before export
const storePersistor = { store, persistor };

export default storePersistor;
