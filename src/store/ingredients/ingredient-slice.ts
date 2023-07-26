import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";
import { Ingredient } from "./types";

// Define a type for the slice state
interface IngredientState {
  list: Ingredient[];
}

// Define the initial state using that type
const initialState: IngredientState = {
  list: [],
};

export const ingredientSlice = createSlice({
  name: "ingredient",
  initialState,
  reducers: {
    setListOfIngredients: (state, action: PayloadAction<any>) => {
      state.list = action.payload;
    },
  },
});

export const { setListOfIngredients } = ingredientSlice.actions;

export const selectedListOfIngredient = (state: RootState) =>
  state.ingredient.list;

export default ingredientSlice.reducer;
