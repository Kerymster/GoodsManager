import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

export const getAppAsyncData = createAsyncThunk(
  "products/getAppAsyncData",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    toggleProduct: (state, action) => {
      console.log(current(state.products));
      console.log(action.payload);
      let newList = state.products.map((item) =>
        item.id == action.payload ? { ...item, checked: !item.checked } : item
      );
      return {
        ...state,
        products: newList,
      };
    },
  },
  extraReducers: {
    [getAppAsyncData.fulfilled]: (state, action) => {
      let newList = action.payload.map((item) =>
        Object.assign(item, { checked: false })
      );
      console.log(newList);
      return {
        ...state,
        products: [...state.products, ...newList],
      };
    },
  },
});

export const { toggleProduct } = productsSlice.actions;
