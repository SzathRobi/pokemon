import { act, renderHook, waitFor } from "@testing-library/react";

import { getPokemonList } from "@/src/lib/pokemon";
import { mockPaginationOffset } from "../../testdata/pagination-offset.testdata";
import { mockPokemonApiResponse } from "../../testdata/pokemon.testdata";

import { usePokemons } from "./use-pokemons";

jest.mock("../../../../lib/pokemon.ts");

describe("usePokemons", () => {
  it("should fetch pokemon list successfully", async () => {
    (getPokemonList as jest.Mock).mockResolvedValueOnce(mockPokemonApiResponse);

    const { result } = renderHook(() => usePokemons(mockPaginationOffset));

    await waitFor(() => !result.current.isPokemonsLoading);

    expect(result.current.isPokemonsLoading).toBe(false);
    expect(result.current.hasPokemonsError).toBe(false);
    expect(result.current.pokemons).toEqual(mockPokemonApiResponse.results);
    expect(getPokemonList).toHaveBeenCalledTimes(1);
    expect(getPokemonList).toHaveBeenCalledWith("0");
  });

  it("should fetch pokemon list when offset changes", async () => {
    (getPokemonList as jest.Mock).mockResolvedValue(mockPokemonApiResponse);

    const { result, rerender } = renderHook((props) => usePokemons(props), {
      initialProps: "0",
    });

    await waitFor(() => !result.current.isPokemonsLoading);

    rerender("10");

    await waitFor(() => !result.current.isPokemonsLoading);

    expect(getPokemonList).toHaveBeenCalledTimes(2);
    expect(getPokemonList).toHaveBeenCalledWith("0");
    expect(getPokemonList).toHaveBeenCalledWith("10");
  });

  it("should handle pokemon list fetch error", async () => {
    const mockError = new Error("Failed to fetch Pokemon list");
    (getPokemonList as jest.Mock).mockRejectedValueOnce(mockError);

    const { result } = renderHook(() => usePokemons(mockPaginationOffset));

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      await waitFor(() => !result.current.isPokemonsLoading);
    });

    expect(result.current.isPokemonsLoading).toBe(false);
    expect(result.current.hasPokemonsError).toBe(mockError);
    expect(result.current.pokemons).toEqual([]);
    expect(getPokemonList).toHaveBeenCalledTimes(1);
    expect(getPokemonList).toHaveBeenCalledWith("0");
  });
});
