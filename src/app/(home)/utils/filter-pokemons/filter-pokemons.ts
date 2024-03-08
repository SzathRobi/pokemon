import { PokemonResult } from "@/src/interfaces/pokemon-result.interface";

export const filterPokemons = (
  pokemons: PokemonResult[],
  pokemonName: string,
) => {
  if (pokemonName === "") {
    return pokemons;
  }

  return pokemons.filter((pokemon) => pokemon.name.includes(pokemonName));
};
