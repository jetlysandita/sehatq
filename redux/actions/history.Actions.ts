//Action Types
export const ADD_HISTORY = "ADD_HISTORY";


//Action Creator
export const addHistory = (data: IProductPromo) => ({
  type: ADD_HISTORY,
  data
});
