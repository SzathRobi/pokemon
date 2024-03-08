import { useEffect, useState } from "react";

import { PokemonResult } from "@/src/interfaces/pokemon-result.interface";
import { getPokemonList } from "@/src/lib/pokemon";

export const usePokemons = (offset: string) => {
  const [pokemons, setPokemons] = useState<PokemonResult[]>([]);
  const [isPokemonsLoading, setIsPokemonsLoading] = useState<boolean>(true);
  const [hasPokemonsError, setHasPokemonsError] = useState<boolean>(false);

  useEffect(() => {
    setIsPokemonsLoading(true);

    getPokemonList(offset)
      .then((data) => {
        setPokemons(data.results);
        setIsPokemonsLoading(false);
      })
      .catch((error: any) => {
        setHasPokemonsError(error);
        setIsPokemonsLoading(false);
      });
  }, [offset]);

  return { pokemons, isPokemonsLoading, hasPokemonsError };
};
