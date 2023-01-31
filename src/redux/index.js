import { configureStore } from '@reduxjs/toolkit';
import textsSlice from './textsSlice';

export const store = configureStore({
  reducer: {
    textsSlice,
  },
});