import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// Important Note!!!
/*https://fakestoreapi.com/products endpoint may not return a healty response,if it seems busy 
you can replace "response.data" with the "fakeData" that I've created below */
const fakeData = [
  {
    id: 1,
    title: "First",
  },
  {
    id: 2,
    title: "ahmet",
  },
  {
    id: 3,
    title: "mehmet",
  },
  {
    id: 4,
    title: "Hasan",
  },
  {
    id: 5,
    title: "hüseyin",
  },
  {
    id: 6,
    title: "salih",
  },
  {
    id: 7,
    title: "Fatih",
  },
  {
    id: 8,
    title: "Last",
  },
];

export const getAppAsyncData = createAsyncThunk(
  "products/getAppAsyncData",
  async () => {
    // const response = await axios.get("https://fakestoreapi.com/products");
    const itemList = fakeData.map((item) => {
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
    categorizedList: [],
    status: null,
  },
  reducers: {
    toggleProduct: (state, action) => {
      let newList = state.products.map((item) =>
        item.id === +action.payload ? { ...item, checked: !item.checked } : item
      );
      return {
        ...state,
        products: newList,
      };
    },
    toggleCategorizedProduct: (state, action) => {
      let newList = state.categorizedList.map((item) =>
        item.id === +action.payload
          ? {
              ...item,
              checked: false,
              categorized: {
                ...item.categorized,

                isCategorized: !item.categorized.isCategorized,
              },
            }
          : item
      );
      return {
        ...state,
        categorizedList: newList,
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
    setProductsRemainingList: (state, action) => {
      return {
        ...state,
        products: state.unCheckedList,
      };
    },

    setProducts: (state, action) => {
      const newList = state.checkedList.map((item) => ({
        ...item,
        categorized: {
          id: action.payload,
          isCategorized: true,
        },
        checked: false,
      }));
      return {
        ...state,
        categorizedList: [...state.categorizedList, ...newList],
      };
    },
    removeProduct: (state) => {
      const newList = state.categorizedList.filter(
        (item) => item.categorized.isCategorized === true
      );
      const removedItemsList = state.categorizedList.filter(
        (item) => item.categorized.isCategorized === false
      );

      return {
        ...state,
        categorizedList: newList,
        products: [...state.unCheckedList, ...removedItemsList].sort(
          (a, b) => a.id - b.id
        ),
      };
    },
    removeAllProducts: (state, action) => {
      const removedItemsList = state.categorizedList.filter(
        (item) => item.categorized.id === action.payload
      );
      return {
        ...state,
        products: [...state.unCheckedList, ...removedItemsList].sort(
          (a, b) => a.id - b.id
        ),
      };
    },
  },
  extraReducers: {
    [getAppAsyncData.pending]: (state) => {
      return {
        ...state,
        status: "loading",
      };
    },
    [getAppAsyncData.fulfilled]: (state, action) => {
      return {
        ...state,
        products: [...state.products, ...action.payload],
        status: "success",
      };
    },
    [getAppAsyncData.rejected]: (state) => {
      return {
        ...state,
        status: "failed",
      };
    },
  },
});

export const {
  toggleProduct,
  checkedProducts,
  unCheckedProducts,
  setProducts,
  setProductsRemainingList,
  removeProduct,
  toggleCategorizedProduct,
  removeAllProducts,
} = productsSlice.actions;
export default productsSlice.reducer;
