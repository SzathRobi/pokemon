import { render, screen } from "@testing-library/react";

import { mockPokemonCharmander } from "../../testdata/pokemon.testdata";
import HomePokemonListPagination from "./home-pokemon-list-pagination";

const selectors = {
  POKEMON_LIST_PAGINATION: "pokemon-list-pagination",
};

describe("HomePokemonListPagination", () => {
  it("should render", () => {
    render(
      <HomePokemonListPagination
        paginationOffset={0}
        urlName={mockPokemonCharmander.name}
      />,
    );

    const pokemonListPagination = screen.getByTestId(
      selectors.POKEMON_LIST_PAGINATION,
    );
    expect(pokemonListPagination).toBeInTheDocument();
  });
});
