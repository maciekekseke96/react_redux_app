import types from "./types";

const INITIAL_STATE = {
  listName: "Basket",
  items: [],
};

const checkAddingProduct = ({ productToSend, stateBasket }) => {
  let newBasket = [...stateBasket.items];
  const newProduct = productToSend;
  let index = false;

  for (let i = 0; i < newBasket.length; i++) {
    if (newProduct.id === newBasket[i].id) {
      index = i;
      newBasket[i].quantity = newBasket[i].quantity + 1;
      break;
    }
  }
  if (index === false) {
    newBasket.push(newProduct);
  }
  return { ...stateBasket, items: newBasket };
};

const itemRemover = ({ product, stateBasket }) => {
  const toDelete = product;
  let toFilter = [...stateBasket.items];
  let newBasket = toFilter.filter((item) => toDelete.id !== item.id);
  return { ...stateBasket, items: newBasket };
};
const basketReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_BASKET_ITEM:
      return checkAddingProduct(action.item);
    case types.REMOVE_BASKET_ITEM:
      return itemRemover(action.item);
    default:
      return state;
  }
};

export default basketReducer;
