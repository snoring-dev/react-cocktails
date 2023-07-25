import request from "@/lib/http";
import { Cocktail } from "./types";

export const getRandomCocktail = async (): Promise<Cocktail | null> => {
  const data = await request({
    method: "get",
    url: "/random.php",
  });

  if (data.drinks && data.drinks.length > 0) {
    return {
      idDrink: data.drinks[0].idDrink,
      strDrink: data.drinks[0].strDrink,
      strDrinkAlternate: data.drinks[0].strDrinkAlternate,
      strCategory: data.drinks[0].strCategory,
      strAlcoholic: data.drinks[0].strAlcoholic,
      strGlass: data.drinks[0].strGlass,
      strInstructions: data.drinks[0].strInstructions,
      strDrinkThumb: data.drinks[0].strDrinkThumb,
      strIngredient1: data.drinks[0].strIngredient1,
      strIngredient2: data.drinks[0].strIngredient2,
      strIngredient3: data.drinks[0].strIngredient3,
      strIngredient4: data.drinks[0].strIngredient4,
      strIngredient5: data.drinks[0].strIngredient5,
      dateModified: data.drinks[0].dateModified,
    };
  }

  return null;
};
