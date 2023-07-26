/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Checkbox } from "@/components/ui/checkbox";
import Heading from "@/components/ui/heading";
import { AppDispatch, RootState } from "@/store";
import {
  selectedListOfIngredient,
  setListOfIngredients,
} from "@/store/ingredients/ingredient-slice";
import { getAllPossibleIngredients } from "@/store/ingredients/service";
import { Ingredient } from "@/store/ingredients/types";
import { getDrinksByIngredient } from "@/store/cocktails/service";
import {
  addToSelectedDrinks,
  removeFromSelectedDrinks,
  selectChoosenDrinks,
  selectDrinksByIngredient,
  setDrinksByIngredient,
} from "@/store/cocktails/cocktail-slice";
import { Button } from "@/components/ui/button";
import { ShortDrink } from "@/store/cocktails/types";
import { cn } from "@/lib/utils";
import DrinkCard from "@/components/ui/drink-card";

interface Props {
  listOfIngredients: Ingredient[];
  drinksByIngredient: ShortDrink[];
  selectedDrinks: ShortDrink[];
  findIngredients: () => any;
  getDrinksByIngredient: (ingredients: string[]) => any;
  addDrink: (drink: ShortDrink) => any;
  removeDrink: (drink: ShortDrink) => any;
}

function FindCocktailPage({
  listOfIngredients,
  drinksByIngredient,
  selectedDrinks,
  findIngredients,
  getDrinksByIngredient,
  addDrink,
  removeDrink,
}: Props) {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  useEffect(() => {
    findIngredients();
  }, [findIngredients]);

  const onSelectIngredient = (value: string) => {
    let newList: string[] = [];

    if (selectedIngredients.includes(value)) {
      newList = selectedIngredients.filter((i) => i !== value);
    } else {
      if (selectedIngredients.length >= 3) {
        alert("3 Ingredients maximum");
        return;
      }
      newList = [...selectedIngredients, value];
    }

    setSelectedIngredients(newList);
  };

  const onClickHandler = () => {
    getDrinksByIngredient(selectedIngredients);
  };

  const toggleDrink = (d: ShortDrink): void => {
    if (selectedDrinks.includes(d)) {
      removeDrink(d);
    } else {
      addDrink(d);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Heading
        title="Trouver un Cocktail à votre gout!"
        description="Veuillez choisir un ingrédient:"
      />
      {listOfIngredients && listOfIngredients.length > 0 && (
        <div className="grid grid-cols-2 gap-2 items-start justify-center w-full h-[300px] overflow-x-scroll border border-gray-100 rounded-sm px-4 py-4">
          {listOfIngredients.map((ingredient: Ingredient, index: number) => {
            return (
              <div
                onClick={() => onSelectIngredient(ingredient.label)}
                key={index}
                className="flex flex-row gap-2 items-start justify-start border border-gray-100 p-4 cursor-pointer hover:border-gray-400 transition-all duration-300 rounded-md"
              >
                <Checkbox
                  value={ingredient.label}
                  checked={selectedIngredients.includes(ingredient.label)}
                />
                <span className="font-medium text-sm uppercase">
                  {ingredient.label}
                </span>
              </div>
            );
          })}
          <Button onClick={onClickHandler}>Chercher</Button>
        </div>
      )}
      {drinksByIngredient && drinksByIngredient.length > 0 && (
        <div className="grid grid-cols-2 gap-4 my-6">
          {drinksByIngredient.map((drink, index) => (
            <DrinkCard
              data={drink}
              key={drink.idDrink + "__" + index}
              selected={selectedDrinks.includes(drink)}
              onClick={() => toggleDrink(drink)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  listOfIngredients: selectedListOfIngredient(state),
  drinksByIngredient: selectDrinksByIngredient(state),
  selectedDrinks: selectChoosenDrinks(state),
});

const mapActionsToProps = {
  findIngredients: () => async (dispatch: AppDispatch) => {
    const list = await getAllPossibleIngredients();
    dispatch(setListOfIngredients(list));
  },
  getDrinksByIngredient:
    (ingredients: string[]) => async (dispatch: AppDispatch) => {
      const drinks = await getDrinksByIngredient(ingredients);
      dispatch(setDrinksByIngredient(drinks));
    },
  addDrink: (drink: ShortDrink) => (dispatch: AppDispatch) => {
    dispatch(addToSelectedDrinks(drink));
  },
  removeDrink: (drink: ShortDrink) => (dispatch: AppDispatch) => {
    dispatch(removeFromSelectedDrinks(drink));
  },
};

export default connect(mapStateToProps, mapActionsToProps)(FindCocktailPage);
