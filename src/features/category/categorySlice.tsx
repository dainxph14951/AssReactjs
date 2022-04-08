import React from 'react'
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { CategoryType } from '../../types/category'
import { listCate,addCate, updateCate, removeCate } from '../../api/category';

// createAsyncThunk một hàm nhận 1 chuỗi kiểu hành động redux và một hàm gọi lại sẽ trả về một kiều kiện
// createSlice Một hàm chấp nhận trạng thái ban đầu đồng thời tự động tạo trình tạo hành động và loại hành động tương ứng

export const getCategorys = createAsyncThunk(
    'category/getcategorys',
    async()=> {
        const {data} = await listCate();
        return data;
    }
);
export const addCategorys = createAsyncThunk(
  'category/addcategorys',
    async(cateId: CategoryType  ) => {
      const {data} = await addCate(cateId);
      return data;
    }
);
export const updateCategorys = createAsyncThunk(
  'category/updatacategorys',
  async(cateId: CategoryType  ) => {
      const {data} = await updateCate(cateId);
      return data;
  }

);
export const removeCategory = createAsyncThunk(
  'category/removeCategory',
  async(cateId: any) => {
      const {data} = await removeCate(cateId);
      return data;
  }

);

const categorySlice = createSlice({
  name: "category", //tên của hành động
  initialState: { //stater
    value: []
  },
  reducers: {
    
  }

});

export default categorySlice.reducer;