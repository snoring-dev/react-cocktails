import DrinkCard from "@/components/ui/drink-card";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import {
  removeFromSelectedDrinks,
  selectChoosenDrinks,
} from "@/store/cocktails/cocktail-slice";
import { ShortDrink } from "@/store/cocktails/types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  selectListOfIngredientsYouNeedToBuy,
  setIngredientsYouNeedToBuy,
} from "@/store/ingredients/ingredient-slice";
import { getAllIngredientsForList } from "@/store/ingredients/service";
import { Ingredient } from "@/store/ingredients/types";
import { useCallback, useEffect } from "react";

function CocktailsListPage() {
  const drinks: ShortDrink[] = useAppSelector(selectChoosenDrinks);
  const ingredientsYouNeed: Ingredient[] = useAppSelector(
    selectListOfIngredientsYouNeedToBuy
  );
  const dispatch = useAppDispatch();

  const removeDrinkFromList = (d: ShortDrink) => {
    dispatch(removeFromSelectedDrinks(d));
  };

  const findNeededIngredients = useCallback(async () => {
    const ing = await getAllIngredientsForList(drinks);
    dispatch(setIngredientsYouNeedToBuy(ing));
  }, [drinks, dispatch]);

  useEffect(() => {
    findNeededIngredients();
  }, [drinks, findNeededIngredients]);

  return (
    <div className="flex flex-col gap-3">
      <Heading
        title="Vos Cocktails"
        description="Voici la liste des cocktails que vous avez choisi"
      />
      <div className="grid grid-cols-2 gap-3 mb-2">
        {drinks &&
          drinks.length > 0 &&
          drinks.map((d) => (
            <DrinkCard
              key={d.idDrink}
              selected={false}
              onDelete={() => removeDrinkFromList(d)}
              data={d}
            />
          ))}
      </div>
      {ingredientsYouNeed && ingredientsYouNeed.length > 0 && (
        <>
          <Separator />
          <div className="flex flex-col items-center justify-center">
            <span className="text-lg">List des ingredients à acheter:</span>
            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              {ingredientsYouNeed &&
                ingredientsYouNeed.length > 0 &&
                ingredientsYouNeed.map((ing, index) => (
                  <li key={index}>{ing.label}</li>
                ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default CocktailsListPage;
