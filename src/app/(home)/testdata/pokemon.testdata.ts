import { PokemonApiResponse } from "@/src/interfaces/pokemon-api-response.interface";
import { PokemonResult } from "@/src/interfaces/pokemon-result.interface";

export const mockPokemonBulbasaur: PokemonResult = {
  name: "Bulbasaur",
  url: "test-url",
};

export const mockPokemonCharmander: PokemonResult = {
  name: "Charmander",
  url: "test-url",
};

export const mockPokemons: PokemonResult[] = [
  mockPokemonBulbasaur,
  mockPokemonCharmander,
];

export const mockPokemonApiResponse: PokemonApiResponse = {
  count: 10,
  next: null,
  previous: null,
  results: mockPokemons,
};
