import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";
import { Cocktail, ShortDrink } from "./types";

interface CocktailState {
  randomItem: Cocktail | null;
  byIngredient: ShortDrink[];
}

// Define the initial state using that type
const initialState: CocktailState = {
  randomItem: null,
  byIngredient: [],
};

export const cocktailSlice = createSlice({
  name: "cocktail",
  initialState,
  reducers: {
    setRandomCocktail: (state, action: PayloadAction<any>) => {
      state.randomItem = action.payload;
    },
    setDrinksByIngredient: (state, action: PayloadAction<any>) => {
      state.byIngredient = [...action.payload];
    },
  },
});

export const { setRandomCocktail, setDrinksByIngredient } = cocktailSlice.actions;

export const selectRandomCocktail = (state: RootState) => state.cocktail.randomItem;

export const selectDrinksByIngredient = (state: RootState) => state.cocktail.byIngredient;

export default cocktailSlice.reducer;
