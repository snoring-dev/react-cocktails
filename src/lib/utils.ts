import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function flattenDrinks(data: any) {
  let allDrinks: Record<string, any>[] = [];
  data.forEach((e: any) => (allDrinks = [...allDrinks, ...e.drinks]));
  const result = [...new Set(allDrinks)];
  return result;
}
