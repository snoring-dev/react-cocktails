import { Cocktail } from "@/store/cocktails/types";

interface Props {
  data: Cocktail;
  showIngredients?: boolean;
  showInstructions?: boolean;
}

function CocktailCard({
  data,
  showIngredients = false,
  showInstructions = false,
}: Props) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src={data.strDrinkThumb}
          alt={data.strDrink}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <span className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.strDrink}
          </span>
        </a>
        {showIngredients && (
          <>
            <div className="mt-3 mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              Ingredients:
            </div>
            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              {[...Array.from({ length: 6 }, (_v, i) => i + 1)].map((n) => {
                const ingredient = data[`strIngredient${n}` as keyof Cocktail];
                if (ingredient) {
                  return <li key={n}>{ingredient}</li>;
                }

                return null;
              })}
            </ul>
          </>
        )}
        {showInstructions && (
          <>
            <div className="mt-3 mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              Instructions:
            </div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {data.strInstructions}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default CocktailCard;
