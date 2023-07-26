import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";
import { Ingredient } from "./types";

// Define a type for the slice state
interface IngredientState {
  list: Ingredient[];
  needToBuy: Ingredient[];
}

// Define the initial state using that type
const initialState: IngredientState = {
  list: [],
  needToBuy: [],
};

export const ingredientSlice = createSlice({
  name: "ingredient",
  initialState,
  reducers: {
    setListOfIngredients: (state, action: PayloadAction<any>) => {
      state.list = action.payload;
    },
    setIngredientsYouNeedToBuy: (state, action: PayloadAction<any>) => {
      state.needToBuy = action.payload;
    },
  },
});

export const { setListOfIngredients, setIngredientsYouNeedToBuy } = ingredientSlice.actions;

export const selectListOfIngredient = (state: RootState) =>
  state.ingredient.list;

export const selectListOfIngredientsYouNeedToBuy = (state: RootState) =>
  state.ingredient.needToBuy;

export default ingredientSlice.reducer;
