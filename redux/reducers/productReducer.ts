import { UPDATE_PRODUCT, CHANGE_FAVORITE } from '../actions/productActions';
const defaultState = []
const productReducer = (state = defaultState, action: { type: string, data: IProductPromo[], id: string }) => {
  switch (action.type) {
    case UPDATE_PRODUCT:
      return [...action.data];
    case CHANGE_FAVORITE:
      return state.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            loved: !item.loved
          }
        }
        return item
      });
    default:
      return [...state];
  }
};

export default productReducer;