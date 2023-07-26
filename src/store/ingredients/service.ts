import request from "@/lib/http";
import { Ingredient } from "./types";
import { ShortDrink } from "../cocktails/types";
import { flattenDrinks } from "@/lib/utils";

function getIngredients(obj) {
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredientKey = `strIngredient${i}`;
    const ingredientValue = obj[ingredientKey];
    if (ingredientValue) {
      ingredients.push(ingredientValue);
    }
  }
  return ingredients;
}

export const getAllPossibleIngredients = async (): Promise<Ingredient[]> => {
  const data = await request({
    method: "get",
    url: "/list.php?i=list",
  });

  if (data.drinks && data.drinks.length > 0) {
    return data.drinks.map((d: { strIngredient1: string }) => ({
      label: d.strIngredient1,
    }));
  }

  return [];
};

export const getAllIngredientsForList = async (
  drinks: ShortDrink[]
): Promise<Ingredient[]> => {
  const requests = drinks.map((d) => {
    return request({
      method: "get",
      url: `/lookup.php?i=${d.idDrink}`,
    });
  });

  const data = await Promise.all(requests);
  const cocktails = flattenDrinks(data);
  const allIngredients = cocktails.map((c) => getIngredients(c));

  return [...allIngredients.flat().map((i) => ({ label: i }))];
};
