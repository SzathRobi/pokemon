import { render, screen, fireEvent } from "@testing-library/react";

import { mockPokemonCharmander } from "../../testdata/pokemon.testdata";
import HomePokemonSearch from "./home-pokemon-list-search";

const selectors = {
  POKEMON_LIST_SEARCH: "pokemon-list-search",
  POKEMON_LIST_SEARCH_INPUT: "pokemon-list-search-input",
};

describe("HomePokemonListSearch", () => {
  it("should call onFilterPokemons with correct value when form is submitted", async () => {
    const mockFilterFunction = jest.fn();
    const mockResetPokemonsIfSearchIsEmpty = jest.fn();

    render(
      <HomePokemonSearch
        onFilterPokemons={mockFilterFunction}
        resetPokemonsIfSearchIsEmpty={mockResetPokemonsIfSearchIsEmpty}
      />,
    );

    const searchTerm = mockPokemonCharmander.name;
    const searchInput = screen.getByTestId(selectors.POKEMON_LIST_SEARCH_INPUT);
    const form = screen.getByTestId(selectors.POKEMON_LIST_SEARCH);

    fireEvent.change(searchInput, { target: { value: searchTerm } });
    fireEvent.submit(form);

    expect(mockFilterFunction).toHaveBeenCalledWith(searchTerm);
  });
});
