import { render, screen, waitFor, fireEvent } from "@testing-library/react";

import useCatchPokemon from "../../hooks/use-catch-pokemon/use-catch-pokemon";
import { mockCatchedCharmander } from "../../testdata/catched-pokemons.testdata";
import { mockPokemonCharmanderDetails } from "../../testdata/pokemon-details.testdata";
import HomePokemonDetailsCard from "./home-pokemon-details-card";

const selectors = {
  CATCH_BUTTON: "catch-button",
  ERROR_MESSAGE: "error-message",
  POKEMON_DETAILS_NAME: "pokemon-details-name",
};

jest.mock("../../hooks/use-catch-pokemon/use-catch-pokemon");
const mockedUseCatchPokemon = useCatchPokemon as jest.MockedFunction<
  typeof useCatchPokemon
>;

describe("HomePokemonDetailsCard", () => {
  beforeEach(() => {
    mockedUseCatchPokemon.mockReturnValue({
      catchPokemon: jest.fn(),
      hasCatchPokemonError: false,
      isCatchPokemonLoading: false,
    });
  });

  it("should render pokemon name correctly", () => {
    render(
      <HomePokemonDetailsCard
        pokemonDetails={mockPokemonCharmanderDetails}
        catchedPokemon={mockCatchedCharmander}
      />,
    );

    expect(
      screen.getByTestId(selectors.POKEMON_DETAILS_NAME),
    ).toHaveTextContent(mockPokemonCharmanderDetails.name);
  });

  it("should handle catch and release pokemon", async () => {
    mockedUseCatchPokemon.mockReturnValue({
      catchPokemon: jest.fn().mockResolvedValue({}),
      hasCatchPokemonError: false,
      isCatchPokemonLoading: false,
    });

    render(
      <HomePokemonDetailsCard
        pokemonDetails={mockPokemonCharmanderDetails}
        catchedPokemon={undefined}
      />,
    );

    fireEvent.click(screen.getByTestId(selectors.CATCH_BUTTON));

    await waitFor(() => {
      expect(screen.getByTestId(selectors.CATCH_BUTTON)).toHaveTextContent(
        "Release",
      );
    });

    fireEvent.click(screen.getByTestId(selectors.CATCH_BUTTON));

    await waitFor(() => {
      expect(screen.getByTestId(selectors.CATCH_BUTTON)).toHaveTextContent(
        "Catch",
      );
    });
  });

  it("should display error message when catching pokemon fails", async () => {
    const mockError = { error: "test error" };

    mockedUseCatchPokemon.mockReturnValue({
      catchPokemon: jest.fn().mockResolvedValueOnce(mockError),
      hasCatchPokemonError: true,
      isCatchPokemonLoading: false,
    });

    render(
      <HomePokemonDetailsCard
        pokemonDetails={mockPokemonCharmanderDetails}
        catchedPokemon={undefined}
      />,
    );

    fireEvent.click(screen.getByTestId(selectors.CATCH_BUTTON));

    await waitFor(() => {
      expect(screen.getByTestId(selectors.ERROR_MESSAGE)).toBeInTheDocument();
    });
  });
});
