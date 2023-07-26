export type PickOnly<T, K extends keyof T> = Pick<T, K> & {
  [P in Exclude<keyof T, K>]?: never;
};

export type Cocktail = {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  dateModified: string;
};

export type ShortDrink = PickOnly<Cocktail, "idDrink" & "strDrink" & "strDrinkThumb">;
