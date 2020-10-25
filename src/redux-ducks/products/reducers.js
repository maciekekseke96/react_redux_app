import json from "./../../items.json"

const jsonString = JSON.stringify(json)
const products = JSON.parse(jsonString);

const INITIAL_STATE = {
  listName: "Products",
  items: products,
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
