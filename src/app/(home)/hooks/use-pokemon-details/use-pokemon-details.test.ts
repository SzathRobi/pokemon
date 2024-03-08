import { getPokemon } from "@/src/lib/pokemon";
import { renderHook, waitFor } from "@testing-library/react";
import { mockPokemonCharmanderDetails } from "../../testdata/pokemon-details.testdata";
import { usePokemonDetails } from "./use-pokemon-details";

jest.mock("../../../../lib/pokemon.ts");

describe("usePokemonDetails", () => {
  it("should fetch pokemon details successfully", async () => {
    (getPokemon as jest.Mock).mockResolvedValueOnce(
      mockPokemonCharmanderDetails,
    );

    const { result } = renderHook(() =>
      usePokemonDetails(mockPokemonCharmanderDetails.name),
    );

    await waitFor(() => !result.current.isPokemonDetailsLoading);

    expect(result.current.isPokemonDetailsLoading).toBe(false);
    expect(result.current.hasPokemonDetailsError).toBe(false);
    expect(result.current.pokemonDetails).toEqual(mockPokemonCharmanderDetails);
  });

  it("should handle pokemon details fetch error", async () => {
    (getPokemon as any).mockRejectedValueOnce(
      new Error("Failed to fetch pokemon details"),
    );

    const { result } = renderHook(() =>
      usePokemonDetails(mockPokemonCharmanderDetails.name),
    );

    await waitFor(() => !result.current.isPokemonDetailsLoading);

    expect(result.current.isPokemonDetailsLoading).toBe(false);
    expect(result.current.hasPokemonDetailsError).toBe(true);
    expect(result.current.pokemonDetails).toBeUndefined();
  });
});
