import { configureStore } from "@reduxjs/toolkit";
import CocktailReducer from './cocktails/cocktailSlice';

export const store = configureStore({
  reducer: {
    cocktail: CocktailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
