import { render, screen } from "@testing-library/react";

import { mockPaginationOffset } from "../../testdata/pagination-offset.testdata";
import { mockPokemonCharmander } from "../../testdata/pokemon.testdata";
import HomePokemonListCard from "./home-pokemon-list-card";

const selectors = {
  POKEMON_LIST_CARD: "pokemon-list-card",
};

describe("HomePokemonListCard", () => {
  describe("when isActiveCard is true", () => {
    it("should render with correct className", () => {
      const getIsActiveCard = jest.fn().mockReturnValue(true);

      render(
        <HomePokemonListCard
          pokemon={mockPokemonCharmander}
          offset={mockPaginationOffset}
          getIsActiveCard={getIsActiveCard}
        />,
      );

      const pokemonListCard = screen.getByTestId(selectors.POKEMON_LIST_CARD);

      expect(pokemonListCard).toHaveClass("bg-blue-100");
      expect(pokemonListCard).not.toHaveClass("bg-transparent");
    });
  });

  describe("when isActiveCard is false", () => {
    it("should render with correct className", () => {
      const getIsActiveCard = jest.fn().mockReturnValue(false);

      render(
        <HomePokemonListCard
          pokemon={mockPokemonCharmander}
          offset={mockPaginationOffset}
          getIsActiveCard={getIsActiveCard}
        />,
      );

      const pokemonListCard = screen.getByTestId(selectors.POKEMON_LIST_CARD);

      expect(pokemonListCard).toHaveClass("bg-transparent");
      expect(pokemonListCard).not.toHaveClass("bg-blue-100");
    });
  });
});
