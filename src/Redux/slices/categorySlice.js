import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
  },
  reducers: {
    addCategory: (state, action) => {
      let newList = state.products.map((item) =>
        item.id == action.payload ? { ...item, checked: !item.checked } : item
      );
      return {
        ...state,
        products: newList,
      };
    },
  },
});

export const { addCategory } = categorySlice.actions;
export default categorySlice.reducer;
