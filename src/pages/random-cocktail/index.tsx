import { Button } from "@/components/ui/button";
import CocktailCard from "@/components/ui/cocktail-card";
import {
  getRandomCocktail,
  selectRandomCocktail,
} from "@/store/cocktails/cocktailSlice";
import * as CocktailService from "@/store/cocktails/service";
import { Cocktail } from "@/store/cocktails/types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

function RandomCocktailPage() {
  const dispatch = useAppDispatch();
  const randomCocktail = useAppSelector<Cocktail | null>(selectRandomCocktail);

  const findRandomCocktail = async () => {
    const cocktail = await CocktailService.getRandomCocktail();
    dispatch(getRandomCocktail(cocktail));
  };

  return (
    <>
      {randomCocktail && (
        <div className="flex flex-col mb-6 items-center">
          <CocktailCard data={randomCocktail} showIngredients showInstructions/>
        </div>
      )}
      <div className="flex flex-col items-center justify-center px-10">
        <div className="font-semibold text-xl text-black mb-2">
          En panne d'inspiration?
        </div>
        <Button onClick={findRandomCocktail}>Trouver moi un Cocktail</Button>
      </div>
    </>
  );
}

export default RandomCocktailPage;
