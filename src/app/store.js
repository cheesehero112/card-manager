import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../components/cardSlice';

export const store = configureStore({
  reducer: {
    card: cardReducer,
  },
});
