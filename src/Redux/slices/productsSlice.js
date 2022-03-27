import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

export const getAppAsyncData = createAsyncThunk(
  "products/getAppAsyncData",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    const itemList = response.data.map((item) => {
      item = {
        id: item.id,
        title: item.title,
        image: item.image,
        checked: false,
        categorized: {
          id: null,
          isCategorized: false,
        },
      };
      return item;
    });
    return itemList;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    checkedList: [],
    unCheckedList: [],
  },
  reducers: {
    toggleProduct: (state, action) => {
      let newList = state.products.map((item) =>
        item.id == action.payload ? { ...item, checked: !item.checked } : item
      );
      return {
        ...state,
        products: newList,
      };
    },

    checkedProducts: (state, action) => {
      return {
        ...state,
        checkedList: action.payload,
      };
    },
    unCheckedProducts: (state, action) => {
      return {
        ...state,
        unCheckedList: action.payload,
      };
    },
  },
  extraReducers: {
    [getAppAsyncData.fulfilled]: (state, action) => {
      return {
        ...state,
        products: [...state.products, ...action.payload],
      };
    },
  },
});

export const { toggleProduct, checkedProducts, unCheckedProducts } =
  productsSlice.actions;
export default productsSlice.reducer;
