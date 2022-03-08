import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import noteReducer from '../features/notes/notesSlice'


export const store = configureStore({
  reducer: {
   //user and goal reducer
   auth: authReducer,
   notes: noteReducer
  },
});
