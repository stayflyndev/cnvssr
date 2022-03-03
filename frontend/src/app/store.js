import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
  reducer: {
   //user and goal reducer
   auth: authReducer,
  },
});
