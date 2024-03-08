"use client";

import { useSearchParams } from "next/navigation";

import { PokemonResult } from "@/src/interfaces/pokemon-result.interface";
import HomePokemonListCard from "../home-pokemon-list-card/home-pokemon-list-card";

type HomePokemonListProps = {
  pokemons: PokemonResult[];
  offset: string;
};

const HomePokemonList = ({ pokemons, offset }: HomePokemonListProps) => {
  const searchParams = useSearchParams();
  const currentPokemonName = searchParams.get("name");

  const getIsActiveCard = (pokemonName: string): boolean =>
    pokemonName === currentPokemonName;

  return (
    <div className="mb-4 max-h-96 overflow-y-auto" data-testid="pokemon-list">
      {pokemons.length > 0 &&
        pokemons.map((pokemon) => (
          <HomePokemonListCard
            key={pokemon.name}
            pokemon={pokemon}
            offset={offset}
            getIsActiveCard={getIsActiveCard}
          />
        ))}
    </div>
  );
};

export default HomePokemonList;
