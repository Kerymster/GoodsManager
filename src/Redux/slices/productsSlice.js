import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [
      {
        id: "12345",
        name: "Television",
        type: "Electronics",
      },
      {
        id: "23456",
        name: "Sneakers",
        type: "Clothing",
      },
      {
        id: "34567",
        name: "Book",
        type: "Stationary",
      },
    ],
  },
  reducers: {
    addState: (state, action) => {
      state.products = {
        ...state,
        products: [...state.products, action.payload],
      };
    },
  },
});

export const { incremented, decremented } = productsSlice.actions;

// store.dispatch(incremented());
// // {value: 1}
