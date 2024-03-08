"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { PokemonResult } from "@/src/interfaces/pokemon-result.interface";
import { usePokemons } from "../../hooks/use-pokemons/use-pokemons";
import { filterPokemons } from "../../utils/filter-pokemons/filter-pokemons";
import HomePokemonList from "../home-pokemon-list/home-pokemon-list";
import HomePokemonListError from "../home-pokemon-list-error/home-pokemon-list-error";
import HomePokemonListPagination from "../home-pokemon-list-pagination/home-pokemon-list-pagination";
import HomePokemonSearch from "../home-pokemon-list-search/home-pokemon-list-search";
import HomePokemonListSkeleton from "../home-pokemon-list-skeleton/home-pokemon-list-skeleton";

const HomePokemonListContainer = () => {
  const searchParams = useSearchParams();
  const urlOffset = searchParams.get("offset") || "0";
  const urlName = searchParams.get("name");

  const { pokemons, isPokemonsLoading, hasPokemonsError } =
    usePokemons(urlOffset);

  const [filteredPokemons, setFilteredPokemons] =
    useState<PokemonResult[]>(pokemons);

  const onFilterPokemons = (pokemonName: string): void => {
    setFilteredPokemons(filterPokemons(pokemons, pokemonName));
  };

  const resetPokemonsIfSearchIsEmpty = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    if (event.target.value.length !== 0) return;

    setFilteredPokemons(pokemons);
  };

  useEffect(() => {
    setFilteredPokemons(pokemons);
  }, [pokemons]);

  if (hasPokemonsError) {
    return <HomePokemonListError />;
  }

  return (
    <div data-testid="pokemon-list-container">
      <HomePokemonSearch
        onFilterPokemons={onFilterPokemons}
        resetPokemonsIfSearchIsEmpty={resetPokemonsIfSearchIsEmpty}
      />

      {isPokemonsLoading ? (
        <HomePokemonListSkeleton />
      ) : (
        <HomePokemonList pokemons={filteredPokemons} offset={urlOffset} />
      )}

      <HomePokemonListPagination
        paginationOffset={Number(urlOffset)}
        urlName={urlName}
      />
    </div>
  );
};

export default HomePokemonListContainer;
