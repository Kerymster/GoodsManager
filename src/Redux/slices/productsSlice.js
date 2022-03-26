import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
    selectedProducs: [],
  },
  reducers: {
    setSelected: (state, action) => {
      state.products = {
        ...state,
        selectedProducts: [...state.selectedProducts, ...action.payload],
      };
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getAppAsyncData.fulfilled, (state, action) => {
      // Add user to the state array
      state.products = {
        ...state,
        products: [...state.products, ...action.payload],
      };
    });
  },
});

export const { setState } = productsSlice.actions;

// store.dispatch(incremented());
// // {value: 1}
