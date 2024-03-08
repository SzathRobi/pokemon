import { render, screen } from "@testing-library/react";

import HomePokemonListError from "./home-pokemon-list-error";

const selectors = {
  POKEMON_LIST_ERROR: "pokemon-list-error",
};

describe("HomePokemonListError", () => {
  it("should create", () => {
    render(<HomePokemonListError />);

    const pokemonListError = screen.getByTestId(selectors.POKEMON_LIST_ERROR);

    expect(pokemonListError).toBeInTheDocument();
  });
});
