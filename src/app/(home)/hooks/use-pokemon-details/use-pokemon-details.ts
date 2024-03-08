import { useEffect, useState } from "react";

import { PokemonDetail } from "@/src/interfaces/pokemon-detail.interface";
import { getPokemon } from "@/src/lib/pokemon";

export const usePokemonDetails = (pokemonName: string | null) => {
  const [pokemonDetails, setPokemonDetails] = useState<
    PokemonDetail | undefined
  >(undefined);
  const [isPokemonDetailsLoading, setIsPokemonDetailsLoading] =
    useState<boolean>(false);
  const [hasPokemonDetailsError, setHasPokemonDetailsError] =
    useState<boolean>(false);

  const fetchPokemonDetails = async () => {
    setHasPokemonDetailsError(false);

    if (!pokemonName) return;

    setIsPokemonDetailsLoading(true);

    try {
      const pokemonData = await getPokemon(pokemonName);

      setPokemonDetails(pokemonData);
    } catch (error) {
      setHasPokemonDetailsError(true);
      return;
    } finally {
      setIsPokemonDetailsLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonDetails();
  }, [pokemonName]);

  return {
    hasPokemonDetailsError,
    isPokemonDetailsLoading,
    pokemonDetails,
  };
};
