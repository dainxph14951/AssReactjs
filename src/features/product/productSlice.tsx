import React from 'react'
import {createAsyncThunk , createSlice} from '@reduxjs/toolkit';
import {listProduct,addProduct,removeProduct,updateProduct,NamePro,productCate,likeNamePro} from '../../api/products';
import {ProductType} from '../../types/products';

// tạo async action = createAsyncThunk
export const listsProduct =createAsyncThunk( //1
  // tên của slider và tên của hàm
  'products/listsProduct', async () => {
    const {data} = await listProduct();
    return data;
  }
); 

export const addsProduct =createAsyncThunk(
  'products/addsProduct', async (params: ProductType ) => {
    const {data} = await addProduct(params);
    return data;
  }
); 

export const deleteProduct =createAsyncThunk(
  'products/deleteProduct', async (params: ProductType ) => {
    const {data} = await removeProduct(params);
    return data;
  }
); 

export const updatesProduct =createAsyncThunk(
  'products/updatesProduct', async (params: ProductType ) => {
    const {data} = await updateProduct(params);
    return data;
  }
); 

export const productCates =createAsyncThunk(
  'products/productCates', async (params: ProductType ) => {
    const {data} = await productCate(params);
    return data;
  }
);

export const namesProduct =createAsyncThunk(
  'products/namesProduct', async (params: ProductType ) => {
    const {data} = await NamePro(params);
    return data;
  }
); 
const productSlice = createSlice({ // createSlice thay thế cho gọi reducer và action
  name: "products", // tên của hành động
  initialState: { // giá trị ban đầu
      value: [],
      loading: true,
      error: "",
  },
  reducers: { // action hành động để làm việc với gtrij ban đầu
  },
  extraReducers: {
    // cập nhật trạng thái khác nhau thay đổi state
    // bắt đầu
      [listsProduct.pending]: (state, action) => { // Reducers
          state.loading = true;
      },
          // khi lỗi
      [listsProduct.rejected]: (state, action) => { // Reducers
        state.loading = false;
        state.error = action.payload;
    },
        // thành công
      [listsProduct.fulfilled]: (state, action) => {
        state.loading = false;
          state.value = action.payload;
      },
      [addsProduct.fulfilled]: (state, action) => {
          state.value.push(action.payload)
      },

      [deleteProduct.fulfilled]: (state, action) => {
          state.value = state.value.filter(item => item._id !== action.payload._id)
      },
      [updatesProduct.fulfilled]: (state, action) => {
          state.value = state.value.map(item => item._id === action.payload._id ? action.payload : item)
      },
      [productCates.fulfilled]: (state, action) => {
        state.value = action.payload;
    },
      [namesProduct.fulfilled]: (state, action) => {
          state.value = action.payload;
      },
  }
});
export default productSlice.reducer



