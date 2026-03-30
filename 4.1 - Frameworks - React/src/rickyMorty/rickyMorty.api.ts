import { CharacterApiResponse } from "./rickyMorty.model";

const base_url = "https://rickandmortyapi.com/api/character";

//Práctica async/await:
export const getCharacters = async (
  name?: string,
): Promise<CharacterApiResponse> => {
  const url = name ? `${base_url}/?name=${name}` : base_url;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error teching characters");
  }
  const data = await response.json();
  console.log(data);
  return data;
};

export const getCharacterDetail = async (id: number) => {
  const url = `https://rickandmortyapi.com/api/character/${id}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error fetching Character Details");
  }
  const data = await response.json();
  return data;
};
