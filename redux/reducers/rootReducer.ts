import productReducer from './productReducer';
import historyReducer from './historyReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  product: productReducer,
  history: historyReducer
});

export default rootReducer;