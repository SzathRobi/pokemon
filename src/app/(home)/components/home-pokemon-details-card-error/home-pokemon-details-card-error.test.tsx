import { render, screen } from "@testing-library/react";

import HomePokemonDetailsContainerError from "./home-pokemon-details-card-error";

const selectors = {
  POKEMON_DETAILS_CARD_ERROR: "pokemon-details-card-error",
};

describe("HomePokemonDetailsContainerError", () => {
  it("should create", () => {
    render(<HomePokemonDetailsContainerError />);
    const homePokemonDetailsContainerError = screen.getByTestId(
      selectors.POKEMON_DETAILS_CARD_ERROR,
    );

    expect(homePokemonDetailsContainerError).toBeInTheDocument();
  });
});
