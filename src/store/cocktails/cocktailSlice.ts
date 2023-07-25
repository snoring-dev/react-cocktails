import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../";
import { Cocktail } from "./types";

// Define a type for the slice state
interface CocktailState {
  randomItem: Cocktail | null;
}

// Define the initial state using that type
const initialState: CocktailState = {
  randomItem: null,
};

export const cocktailSlice = createSlice({
  name: "cocktail",
  initialState,
  reducers: {
    getRandomCocktail: (state, action: PayloadAction<any>) => {
      state.randomItem = action.payload;
    },
  },
});

export const { getRandomCocktail } = cocktailSlice.actions;

export const selectRandomCocktail = (state: RootState) => state.cocktail.randomItem;

export default cocktailSlice.reducer;
