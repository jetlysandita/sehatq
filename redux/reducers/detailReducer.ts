import { CHANGE_DETAIL } from '../actions/detailActions';
const defaultState = {
  id: ''
}
const productReducer = (state = defaultState, action: { type: string, id: String }) => {
  switch (action.type) {
    case CHANGE_DETAIL:
      return { ...state, id: action.id };
    default:
      return { ...state };
  }
};

export default productReducer;