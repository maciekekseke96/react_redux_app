import types from "./types";

const INITIAL_STATE = {
  listName: "Basket",
  items: [
    {
      id: 11,
      title: "Doom Eternal",
      cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1lvj.jpg",
      availability: true,
      price: 129.99,
      currency: "PLN",
      quantity: 1,
    },
  ],
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
const basketReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_BASKET_ITEM:
      return checkAddingProduct(action.item);
    default:
      return state;
  }
};

export default basketReducer;
