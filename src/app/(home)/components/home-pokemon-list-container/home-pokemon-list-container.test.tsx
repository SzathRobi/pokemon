import { render, screen } from "@testing-library/react";

import { usePokemons } from "../../hooks/use-pokemons/use-pokemons";
import { mockPokemons } from "../../testdata/pokemon.testdata";
import HomePokemonListContainer from "./home-pokemon-list-container";

const selectors = {
  POKEMON_LIST: "pokemon-list",
  POKEMON_LIST_ERROR: "pokemon-list-error",
  POKEMON_LIST_SKELETON: "pokemon-list-skeleton",
  POKEMON_LIST_SEARCH_FORM: "pokemon-list-search",
  POKEMON_LIST_SEARCH_INPUT: "pokemon-list-search-input",
  POKEMON_LIST_CARD: "pokemon-list-card",
};

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(() => ({
    get: jest.fn(),
  })),
}));

jest.mock("../../hooks/use-pokemons/use-pokemons");

const mockUsePokemons = usePokemons as jest.MockedFunction<typeof usePokemons>;

describe("HomePokemonListContainer", () => {
  it("should render HomePokemonListContainer with loading state", () => {
    mockUsePokemons.mockReturnValue({
      pokemons: [],
      isPokemonsLoading: true,
      hasPokemonsError: false,
    });

    render(<HomePokemonListContainer />);

    expect(
      screen.getByTestId(selectors.POKEMON_LIST_SKELETON),
    ).toBeInTheDocument();
  });

  it("should render HomePokemonListContainer with error state", () => {
    mockUsePokemons.mockReturnValue({
      pokemons: [],
      isPokemonsLoading: false,
      hasPokemonsError: true,
    });

    render(<HomePokemonListContainer />);

    expect(
      screen.getByTestId(selectors.POKEMON_LIST_ERROR),
    ).toBeInTheDocument();
  });

  it("should render HomePokemonListContainer with filtered pokemons", async () => {
    mockUsePokemons.mockReturnValue({
      pokemons: mockPokemons,
      isPokemonsLoading: false,
      hasPokemonsError: false,
    });

    render(<HomePokemonListContainer />);

    expect(
      screen.queryByTestId(selectors.POKEMON_LIST_SKELETON),
    ).not.toBeInTheDocument();
  });
});
