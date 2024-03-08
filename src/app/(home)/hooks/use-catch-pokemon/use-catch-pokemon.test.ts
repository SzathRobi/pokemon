import { act, renderHook } from "@testing-library/react";

import { mockPokemonCharmander } from "../../testdata/pokemon.testdata";
import useCatchPokemon from "./use-catch-pokemon";

const mockFetch = jest.fn();

global.fetch = mockFetch;

describe("useCatchPokemon", () => {
  it("should catche pokemon successfully with POST method", async () => {
    mockFetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce({}),
    });

    const { result } = renderHook(() =>
      useCatchPokemon(mockPokemonCharmander.name),
    );

    await result.current.catchPokemon("POST");

    expect(result.current.isCatchPokemonLoading).toBe(false);
    expect(result.current.hasCatchPokemonError).toBe(false);
  });

  it("should handle error when catching pokemon with POST method", async () => {
    mockFetch.mockRejectedValueOnce(new Error("Failed to catch Pokemon"));

    const { result } = renderHook(() =>
      useCatchPokemon(mockPokemonCharmander.name),
    );

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      await result.current.catchPokemon("POST");
    });

    expect(result.current.isCatchPokemonLoading).toBe(false);
    expect(result.current.hasCatchPokemonError).toBe(true);
  });

  it("should release pokemon successfully with DELETE method", async () => {
    mockFetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce({}),
    });

    const { result } = renderHook(() =>
      useCatchPokemon(mockPokemonCharmander.name),
    );

    await result.current.catchPokemon("DELETE");

    expect(result.current.isCatchPokemonLoading).toBe(false);
    expect(result.current.hasCatchPokemonError).toBe(false);
  });

  it("should handle error when releasing okemon with DELETE method", async () => {
    mockFetch.mockRejectedValueOnce(new Error("Failed to release pokemon"));

    const { result } = renderHook(() =>
      useCatchPokemon(mockPokemonCharmander.name),
    );

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      await result.current.catchPokemon("DELETE");
    });

    expect(result.current.isCatchPokemonLoading).toBe(false);
    expect(result.current.hasCatchPokemonError).toBe(true);
  });

  it("should handle error when catched pokemon has an error", async () => {
    mockFetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce({ error: "Some error" }),
    });

    const { result } = renderHook(() =>
      useCatchPokemon(mockPokemonCharmander.name),
    );

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      await result.current.catchPokemon("POST");
    });

    expect(result.current.isCatchPokemonLoading).toBe(false);
    expect(result.current.hasCatchPokemonError).toBe(true);
  });

  it("should not catch pokemon if pokemonName is not defined", async () => {
    const { result } = renderHook(() => useCatchPokemon(null));

    await result.current.catchPokemon("POST");

    expect(result.current.isCatchPokemonLoading).toBe(false);
    expect(result.current.hasCatchPokemonError).toBe(false);
  });
});
