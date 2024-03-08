const POKEMON_API = "https://pokeapi.co/api/v2";

export async function getPokemonList(offset: string) {
  const response = await fetch(
    POKEMON_API + `/pokemon?limit=20&offset=${offset}`,
  );
  const data = await response.json();
  return data;
}

export async function getPokemon(name: string) {
  const response = await fetch(POKEMON_API + "/pokemon/" + name);
  const data = await response.json();
  return data;
}
