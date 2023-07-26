import { configureStore } from "@reduxjs/toolkit";
import CocktailReducer from '@/store/cocktails/cocktail-slice';
import IngredientReducer from '@/store/ingredients/ingredient-slice';

export const store = configureStore({
  reducer: {
    cocktail: CocktailReducer,
    ingredient: IngredientReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
