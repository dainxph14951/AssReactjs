import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import categoryReducer from '../features/category/categorySlice';
import productReducer from '../features/product/productSlice';

export const store = configureStore({
  reducer: { //data
    auth: authReducer,
    category: categoryReducer,
    product: productReducer
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

// function getInt(a: string) {
//   return parseInt(a);
// }

// type A = ReturnType<typeof getInt>; // => number