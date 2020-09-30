import { ADD_HISTORY } from '../actions/history.Actions';
const defaultState = []
const productReducer = (state = defaultState, action: { type: string, data: IProductPromo }) => {
  switch (action.type) {
    case ADD_HISTORY:
      return [...state, action.data];
    default:
      return [...state];
  }
};

export default productReducer;