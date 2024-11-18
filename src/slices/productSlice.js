import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { create, getList } from "../api/productApi";

// 비동기 처리 함수
export const getProducts = createAsyncThunk("getProductsAsync", () => {
  return getList();
});

export const postProduct = createAsyncThunk("postProductAsync", (param) => {
  return create(param);
});

const initialProduct = {
  id: 0,
  title: "",
  price: 0,
  imgsrc: "",
  description: "",
};

// 초기 상태
const initialState = {
  items: [],
  item: initialProduct,
};

const productSlice = createSlice({
  name: "productSlice",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(postProduct.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
      });
  },
});

export default productSlice.reducer;
