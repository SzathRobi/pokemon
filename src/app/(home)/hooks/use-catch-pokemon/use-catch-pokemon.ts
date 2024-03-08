import { useState } from "react";

const useCatchPokemon = (pokemonName: string | null) => {
  const [isCatchPokemonLoading, setIsCatchPokemonLoading] = useState<boolean>(false);
  const [hasCatchPokemonError, setHasCatchPokemonError] = useState<boolean>(false);

  const catchPokemon = async (method: "POST" | "DELETE") => {
    if (!pokemonName) return;

    setHasCatchPokemonError(false);
    setIsCatchPokemonLoading(true);

    try {
      const catchedPokemonResponse = await fetch(
        `/api/pokemon/${pokemonName}`,
        {
          method: method,
          body: JSON.stringify({ name: pokemonName }),
        },
      );
      const catchedPokemon = await catchedPokemonResponse.json();

      if (catchedPokemon.error) {
        setHasCatchPokemonError(true);
        return;
      }
    } catch {
      setHasCatchPokemonError(true);
    } finally {
      setIsCatchPokemonLoading(false);
    }
  };

  return {
    catchPokemon,
    hasCatchPokemonError,
    isCatchPokemonLoading,
  };
};

export default useCatchPokemon;
