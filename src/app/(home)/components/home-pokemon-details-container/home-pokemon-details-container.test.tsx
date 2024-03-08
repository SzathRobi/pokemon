import { render, screen } from "@testing-library/react";

import useCatchedPokemon from "../../hooks/use-catched-pokemon/use-catched-pokemon";
import { usePokemonDetails } from "../../hooks/use-pokemon-details/use-pokemon-details";
import { mockCatchedCharmander } from "../../testdata/catched-pokemons.testdata";
import { mockPokemonCharmanderDetails } from "../../testdata/pokemon-details.testdata";
import HomePokemonDetailsContainer from "./home-pokemon-details-container";

const selectors = {
  POKEMON_DETAIL_CARD: "pokemon-details-card",
  POKEMON_DETAIL_CARD_ERROR: "pokemon-details-card-error",
  POKEMON_DETAIL_CARD_SKELETON: "pokemon-details-card-skeleton",
};

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(() => ({
    get: jest.fn(),
  })),
}));

jest.mock("../../hooks/use-pokemon-details/use-pokemon-details.ts");
const mockedUsePokemonDetails = usePokemonDetails as jest.MockedFunction<
  typeof usePokemonDetails
>;

jest.mock("../../hooks/use-catched-pokemon/use-catched-pokemon.ts");
const mockedUseCatchedPokemon = useCatchedPokemon as jest.MockedFunction<
  typeof useCatchedPokemon
>;

describe("HomePokemonDetailsContainer", () => {
  describe("when catchedPokemon and pokemonDetails are defined", () => {
    beforeEach(() => {
      mockedUseCatchedPokemon.mockReturnValue({
        catchedPokemon: mockCatchedCharmander,
        hasCatchedPokemonError: false,
        isCatchedPokemonLoading: false,
      });

      mockedUsePokemonDetails.mockReturnValue({
        pokemonDetails: mockPokemonCharmanderDetails,
        hasPokemonDetailsError: false,
        isPokemonDetailsLoading: false,
      });
    });

    it("should display PokemonDetailsCard when pokemonDetails is defined", () => {
      render(<HomePokemonDetailsContainer />);

      const pokemonNameElement = screen.getByTestId(
        selectors.POKEMON_DETAIL_CARD,
      );

      expect(pokemonNameElement).toBeInTheDocument();
    });
  });

  describe("when isCatchedPokemonLoading is true", () => {
    beforeEach(() => {
      mockedUseCatchedPokemon.mockReturnValue({
        catchedPokemon: undefined,
        hasCatchedPokemonError: false,
        isCatchedPokemonLoading: true,
      });

      mockedUsePokemonDetails.mockReturnValue({
        pokemonDetails: mockPokemonCharmanderDetails,
        hasPokemonDetailsError: false,
        isPokemonDetailsLoading: false,
      });
    });

    it("should display PokemonCardSkeleton", () => {
      render(<HomePokemonDetailsContainer />);

      const pokemonCardSkeleton = screen.getByTestId(
        selectors.POKEMON_DETAIL_CARD_SKELETON,
      );

      expect(pokemonCardSkeleton).toBeInTheDocument();
    });
  });

  describe("when hasCatchedPokemonError is true", () => {
    beforeEach(() => {
      mockedUseCatchedPokemon.mockReturnValue({
        catchedPokemon: undefined,
        hasCatchedPokemonError: true,
        isCatchedPokemonLoading: false,
      });

      mockedUsePokemonDetails.mockReturnValue({
        pokemonDetails: mockPokemonCharmanderDetails,
        hasPokemonDetailsError: false,
        isPokemonDetailsLoading: false,
      });
    });

    it("should display PokemonCardError", () => {
      render(<HomePokemonDetailsContainer />);

      const pokemonCardError = screen.getByTestId(
        selectors.POKEMON_DETAIL_CARD_ERROR,
      );

      expect(pokemonCardError).toBeInTheDocument();
    });
  });

  describe("when isPokemonDetailsLoading is true", () => {
    beforeEach(() => {
      mockedUseCatchedPokemon.mockReturnValue({
        catchedPokemon: undefined,
        hasCatchedPokemonError: false,
        isCatchedPokemonLoading: false,
      });

      mockedUsePokemonDetails.mockReturnValue({
        pokemonDetails: mockPokemonCharmanderDetails,
        hasPokemonDetailsError: false,
        isPokemonDetailsLoading: true,
      });
    });

    it("should display PokemonCardSkeleton", () => {
      render(<HomePokemonDetailsContainer />);

      const pokemonCardSkeleton = screen.getByTestId(
        selectors.POKEMON_DETAIL_CARD_SKELETON,
      );

      expect(pokemonCardSkeleton).toBeInTheDocument();
    });
  });

  describe("when hasPokemonDetailsError is true", () => {
    beforeEach(() => {
      mockedUseCatchedPokemon.mockReturnValue({
        catchedPokemon: mockCatchedCharmander,
        hasCatchedPokemonError: false,
        isCatchedPokemonLoading: false,
      });

      mockedUsePokemonDetails.mockReturnValue({
        pokemonDetails: undefined,
        hasPokemonDetailsError: true,
        isPokemonDetailsLoading: false,
      });
    });

    it("should display PokemonCardError", () => {
      render(<HomePokemonDetailsContainer />);

      const pokemonCardError = screen.getByTestId(
        selectors.POKEMON_DETAIL_CARD_ERROR,
      );

      expect(pokemonCardError).toBeInTheDocument();
    });
  });
});
