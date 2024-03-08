import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import HomePokemonDetailCardSkeleton from "./home-pokemon-details-card-skeleton";

const selectors = {
  POKEMON_DETAILS_CARD_SKELETON: "pokemon-details-card-skeleton",
};

describe("HomePokemonDetailCardSkeleton", () => {
  it("should create", () => {
    render(<HomePokemonDetailCardSkeleton />);

    const pokemonDetailCardSkeleton = screen.getByTestId(
      selectors.POKEMON_DETAILS_CARD_SKELETON,
    );

    expect(pokemonDetailCardSkeleton).toBeInTheDocument();
  });
});
