"use client";

import { useSearchParams } from "next/navigation";

import useCatchedPokemon from "../../hooks/use-catched-pokemon/use-catched-pokemon";
import { usePokemonDetails } from "../../hooks/use-pokemon-details/use-pokemon-details";
import HomePokemonDetailCardSkeleton from "../home-pokemon-details-card-skeleton/home-pokemon-details-card-skeleton";
import HomePokemonDetailCard from "../home-pokemon-details-card/home-pokemon-details-card";
import HomePokemonDetailsCardError from "../home-pokemon-details-card-error/home-pokemon-details-card-error";

const HomePokemonDetailsContainer = () => {
  const searchParams = useSearchParams();
  const pokemonName = searchParams.get("name");

  const { pokemonDetails, hasPokemonDetailsError, isPokemonDetailsLoading } =
    usePokemonDetails(pokemonName);

  const { catchedPokemon, hasCatchedPokemonError, isCatchedPokemonLoading } =
    useCatchedPokemon(pokemonName);

  const hasPokemonError = hasCatchedPokemonError || hasPokemonDetailsError;
  const isPokemonLoading = isCatchedPokemonLoading || isPokemonDetailsLoading;

  return (
    <div>
      {hasPokemonError && <HomePokemonDetailsCardError />}

      {isPokemonLoading && <HomePokemonDetailCardSkeleton />}

      {!isPokemonLoading && !hasPokemonError && pokemonDetails && (
        <HomePokemonDetailCard
          pokemonDetails={pokemonDetails}
          catchedPokemon={catchedPokemon}
        />
      )}
    </div>
  );
};

export default HomePokemonDetailsContainer;
