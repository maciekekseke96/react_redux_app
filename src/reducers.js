import { combineReducers } from "redux";
import { productsReducer } from "./redux-ducks/products/index";
import { basketReducer } from "./redux-ducks/basket/index";

const rootReducer = combineReducers({
  products: productsReducer,
  basket: basketReducer,
});

export default rootReducer;
