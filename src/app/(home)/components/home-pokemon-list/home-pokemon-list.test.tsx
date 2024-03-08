import { render, screen } from "@testing-library/react";

import { mockPaginationOffset } from "../../testdata/pagination-offset.testdata";
import { mockPokemons } from "../../testdata/pokemon.testdata";
import HomePokemonList from "./home-pokemon-list";

const selectors = {
  POKEMON_LIST: "pokemon-list",
};

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(() => ({
    get: jest.fn(),
  })),
}));

describe("HomePokemonList component", () => {
  it("should create", () => {
    render(
      <HomePokemonList pokemons={mockPokemons} offset={mockPaginationOffset} />,
    );
    const pokemonList = screen.getByTestId(selectors.POKEMON_LIST);

    expect(pokemonList).toBeInTheDocument();
  });
});
