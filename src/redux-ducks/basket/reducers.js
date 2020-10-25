import types from "./types"

const INITIAL_STATE = {
  listName: "Basket",
  items: [],
};

const basketReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_BASKET_ITEM:
      return { ...state, items: [...state.items, action.item] };
    default:
      return state;
  }
};

export default basketReducer;
