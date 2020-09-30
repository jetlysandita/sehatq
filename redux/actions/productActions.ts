//Action Types
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const CHANGE_FAVORITE = "CHANGE_FAVORITE";


//Action Creator
export const updateProduct = (data: IProductPromo[]) => ({
  type: UPDATE_PRODUCT,
  data
});

export const changeFavorite = (id: String) => ({
  type: CHANGE_FAVORITE,
  id
});