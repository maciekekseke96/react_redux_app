import types from "./types";

const INITIAL_STATE = {
  listName: "Basket",
  items: [{
    id: 11,
    title: "Doom Eternal",
    cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1lvj.jpg",
    availability: true,
    price: 129.99,
    currency: "PLN",
    quantity:1,
  },{
    id: 12,
    title: "Call Of Duty Modern Warfare Zarąbiście długa nazwa",
    cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1lvj.jpg",
    availability: true,
    price: 129.99,
    currency: "PLN",
    quantity:1,
  }],
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
