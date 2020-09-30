//Action Types
export const CHANGE_DETAIL = "CHANGE_DETAIL";


//Action Creator
export const changeDetail = (id: string) => ({
  type: CHANGE_DETAIL,
  id
});
