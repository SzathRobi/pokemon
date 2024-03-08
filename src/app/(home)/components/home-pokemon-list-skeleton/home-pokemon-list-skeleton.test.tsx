import { render, screen } from "@testing-library/react";

import HomePokemonListSkeleton from "./home-pokemon-list-skeleton";

const selectors = {
  POKEMON_LIST_SKELETON: "pokemon-list-skeleton",
};

describe("HomePokemonListSkeleton", () => {
  it("should create", () => {
    render(<HomePokemonListSkeleton />);
    const pokemonListSkeleton = screen.getByTestId(
      selectors.POKEMON_LIST_SKELETON,
    );

    expect(pokemonListSkeleton).toBeInTheDocument();
  });
});
