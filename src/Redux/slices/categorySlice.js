import { createSlice, current } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [{ id: 1, title: "Category 1" }],

    id: 2,
  },
  reducers: {
    addCategory: (state) => {
      return {
        ...state,
        categories: [
          ...state.categories,
          { id: state.id, title: `Category ${state.id}` },
        ],
        id: state.id + 1,
      };
    },
    removeCategory: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category.id != action.payload
        ),
      };
    },
  },
});

export const { addCategory, removeCategory } = categorySlice.actions;
export default categorySlice.reducer;
