import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import { mockCatchedCharmander } from "../../testdata/catched-pokemons.testdata";
import useCatchedPokemon from "./use-catched-pokemon";

describe("useCatchedPokemon", () => {
  it("should fetch catchedPokemon data successfully", async () => {
    const jsonMock = jest.fn().mockResolvedValue(mockCatchedCharmander);
    const fetchMock = jest.fn().mockResolvedValue({
      json: jsonMock,
    });

    global.fetch = fetchMock;

    const { result } = renderHook(() =>
      useCatchedPokemon(mockCatchedCharmander.name),
    );

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(fetchMock).toHaveBeenCalledWith(
      `/api/pokemon/${mockCatchedCharmander.name}`,
    );
    expect(jsonMock).toHaveBeenCalled();

    expect(result.current.isCatchedPokemonLoading).toBe(false);
    expect(result.current.hasCatchedPokemonError).toBe(false);
  });

  it("should handle errors when fetching catchedPokemon data", async () => {
    const fetchMock = jest.fn().mockRejectedValue(new Error("Failed to fetch"));
    global.fetch = fetchMock;

    const { result } = renderHook(() =>
      useCatchedPokemon(mockCatchedCharmander.name),
    );

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(fetchMock).toHaveBeenCalledWith(
      `/api/pokemon/${mockCatchedCharmander.name}`,
    );

    expect(result.current.isCatchedPokemonLoading).toBe(false);
    expect(result.current.hasCatchedPokemonError).toBe(true);
    expect(result.current.catchedPokemon).toBeUndefined();
  });
});
