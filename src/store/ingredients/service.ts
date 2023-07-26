import request from "@/lib/http";
import { Ingredient } from "./types";

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
