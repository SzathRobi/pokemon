import { useEffect, useState } from "react";

import { CatchedPokemon } from "@/src/interfaces/catched-pokemon.interface";

const useCatchedPokemon = (pokemonName: string | null) => {
  const [catchedPokemon, setCatchedPokemon] = useState<
    CatchedPokemon | undefined
  >(undefined);
  const [isCatchedPokemonLoading, setIsCatchedPokemonLoading] =
    useState<boolean>(false);
  const [hasCatchedPokemonError, setHasCatchedPokemonError] =
    useState<boolean>(false);

  const getCatchedPokemon = async () => {
    setCatchedPokemon(undefined);
    setHasCatchedPokemonError(false);
    setIsCatchedPokemonLoading(true);

    try {
      const catchedPokemonResponse = await fetch(`/api/pokemon/${pokemonName}`);
      const catchedPokemonData = await catchedPokemonResponse.json();

      setCatchedPokemon(catchedPokemonData.catchedPokemon);
    } catch {
      setHasCatchedPokemonError(true);
    } finally {
      setIsCatchedPokemonLoading(false);
    }
  };

  useEffect(() => {
    if (!pokemonName) return;

    getCatchedPokemon();
  }, [pokemonName]);

  return { hasCatchedPokemonError, isCatchedPokemonLoading, catchedPokemon };
};

export default useCatchedPokemon;
