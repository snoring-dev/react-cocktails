import { cn } from "@/lib/utils";
import { ShortDrink } from "@/store/cocktails/types";

interface Props {
  data: ShortDrink;
  onClick: () => void;
  selected?: boolean;
}

function DrinkCard({ data, onClick, selected = false }: Props) {
  return (
    <a
      href="#"
      onClick={onClick}
      className={cn(
        "flex flex-row items-center bg-white border-2 rounded-lg shadow hover:bg-gray-100 transition-all duration-300",
        selected ? "border-black" : "border-gray-100/0"
      )}
    >
      <img
        className="object-cover h-16 w-16 rounded-l-lg"
        src={data.strDrinkThumb}
        alt={data.strDrink}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
          {data.strDrink}
        </h5>
      </div>
    </a>
  );
}

export default DrinkCard;
