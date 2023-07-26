import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";
import { Cocktail, ShortDrink } from "./types";

interface CocktailState {
  randomItem: Cocktail | null;
  byIngredient: ShortDrink[];
  selectedDrinks: ShortDrink[];
}

// Define the initial state using that type
const initialState: CocktailState = {
  randomItem: null,
  byIngredient: [],
  selectedDrinks: [],
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
    addToSelectedDrinks: (state, action: PayloadAction<ShortDrink>) => {
      state.selectedDrinks = [...state.selectedDrinks, action.payload];
    },
    removeFromSelectedDrinks: (state, action: PayloadAction<ShortDrink>) => {
      state.selectedDrinks = [
        ...state.selectedDrinks.filter(
          (d) => d.idDrink !== action.payload.idDrink
        ),
      ];
    },
  },
});

export const { setRandomCocktail, setDrinksByIngredient, addToSelectedDrinks, removeFromSelectedDrinks } =
  cocktailSlice.actions;

export const selectRandomCocktail = (state: RootState) =>
  state.cocktail.randomItem;

export const selectDrinksByIngredient = (state: RootState) =>
  state.cocktail.byIngredient;

export const selectChoosenDrinks = (state: RootState) =>
  state.cocktail.selectedDrinks;

export default cocktailSlice.reducer;
