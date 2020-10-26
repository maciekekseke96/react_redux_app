import types from "./types";

const add = (item) => ({ type: types.ADD_BASKET_ITEM, item });
const remove = (item) => ({ type: types.REMOVE_BASKET_ITEM, item });

export default {
  add,
  remove,
};
