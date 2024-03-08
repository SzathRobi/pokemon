import {
  mockPokemonCharmander,
  mockPokemons,
} from "../../testdata/pokemon.testdata";
import { filterPokemons } from "./filter-pokemons";

describe("filterPokemons", () => {
  describe("when searchInput is empty", () => {
    it("should return all pokemons", () => {
      expect(filterPokemons(mockPokemons, "")).toEqual(mockPokemons);
    });
  });

  describe("when searchInput is not empty", () => {
    it("should return all pokemons", () => {
      expect(filterPokemons(mockPokemons, "Cha")).toEqual([
        mockPokemonCharmander,
      ]);
    });
  });
});
