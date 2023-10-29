import { CardData } from "../types/types";

export async function fetchedData(searchValue: string) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?name=${searchValue}/?sprites`,
    );
    const data: CardData = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
