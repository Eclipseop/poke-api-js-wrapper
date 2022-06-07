import fetch from "node-fetch";
import { Pokemon } from "pokemon";

const pokemonCache: Map<string | number, Pokemon> = new Map();

export const getPokemon = async (name: string | number): Promise<Pokemon> => {
  if (pokemonCache.has(name)) {
    return new Promise((res, rej) => {
      const item = pokemonCache.get(name);
      if (item) {res(item);}
      else {rej('Item not found in cache but still got here? l0l');}
    });
  }

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data: Pokemon = await response.json();
  pokemonCache.set(name, data);
  return data;
};
