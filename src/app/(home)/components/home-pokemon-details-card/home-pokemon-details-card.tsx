"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import Button from "@/src/components/button/button";
import { PokemonDetail } from "@/src/interfaces/pokemon-detail.interface";
import { CatchedPokemon } from "@/src/interfaces/catched-pokemon.interface";
import useCatchPokemon from "../../hooks/use-catch-pokemon/use-catch-pokemon";
import getImageSource from "../../utils/get-image-source/get-image-source";

type HomePokemonDetailsCardProps = {
  pokemonDetails: PokemonDetail;
  catchedPokemon: CatchedPokemon | undefined;
};

const HomePokemonDetailsCard = ({
  pokemonDetails,
  catchedPokemon,
}: HomePokemonDetailsCardProps) => {
  const { catchPokemon, hasCatchPokemonError, isCatchPokemonLoading } =
    useCatchPokemon(pokemonDetails.name);

  const [isPokemonCatched, setIsPokemonCatched] = useState(false);

  const onCatchPokemon = (isPokemonCatched: boolean): void => {
    catchPokemon(isPokemonCatched ? "DELETE" : "POST").then(() => {
      setIsPokemonCatched(!isPokemonCatched);
    });
  };

  useEffect(() => {
    setIsPokemonCatched(!!catchedPokemon);
  }, []);

  return (
    <div data-testid="pokemon-details-card">
      <Image
        alt={pokemonDetails.name}
        className="mx-auto"
        width={256}
        height={256}
        src={getImageSource(pokemonDetails.sprites)}
      />

      <div className="px-16">
        <h2
          className="mb-4 text-2xl font-medium"
          data-testid="pokemon-details-name"
        >
          {pokemonDetails.name}
        </h2>

        <div className="mb-8 flex flex-col items-start justify-start gap-2 sm:flex-row sm:gap-24">
          <div>
            <p className="font-medium">height:</p>
            <p>{pokemonDetails.height}</p>

            <p className="font-medium">weight:</p>
            <p>{pokemonDetails.weight}</p>
          </div>

          <div>
            <p className="font-medium">abilities:</p>
            <div className="flex flex-wrap items-start justify-start gap-1">
              {pokemonDetails.abilities.map(({ ability }: any) => (
                <p key={ability.name}>{ability.name},</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Button
        className="mb-2 w-full"
        disabled={isCatchPokemonLoading}
        isLoading={isCatchPokemonLoading}
        onClick={() => onCatchPokemon(isPokemonCatched)}
        dataTestId="catch-button"
      >
        {isPokemonCatched ? "Release" : "Catch"}
      </Button>

      {hasCatchPokemonError && (
        <p className="text-red-500" data-testid="error-message">
          Something went wrong!
        </p>
      )}
    </div>
  );
};

export default HomePokemonDetailsCard;
