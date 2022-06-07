import { Berry } from 'berry';
import { Firmness } from 'berry-firmness';
import { Flavor } from 'berry-flavor';
import fetch from 'node-fetch';

const berryCache: Map<string | number, Berry> = new Map();

export const getBerry = async (name: string | number): Promise<Berry> => {
  if (berryCache.has(name)) {
    return new Promise((res, rej) => {
      const item = berryCache.get(name);
      if (item) {res(item);}
      else {rej('Item not found in cache but still got ehre? l0l');}
    });
  }

  const response = await fetch(`https://pokeapi.co/api/v2/berry/${name}`);
  const data: Berry = await response.json();
  berryCache.set(name, data);
  return data;
};

export const getFirmness = async (name: string | number): Promise<Firmness> => {
  const response = await fetch(`https://pokeapi.co/api/v2/berry-firmness/${name}`);
  const data: Firmness = await response.json();
  return data;
};

export const getFlavor = async (name: string | number): Promise<Flavor> => {
  const response = await fetch(`https://pokeapi.co/api/v2/berry-flavor/${name}`);
  const data: Flavor = await response.json();
  return data;
};