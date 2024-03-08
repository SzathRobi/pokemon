"use client";

import { ChangeEvent, FormEvent } from "react";

import Button from "@/src/components/button/button";
import Input from "@/src/components/input/input";

type HomePokemonSearchProps = {
  onFilterPokemons: (value: string) => void;
  resetPokemonsIfSearchIsEmpty: (event: ChangeEvent<HTMLInputElement>) => void;
};

const HomePokemonSearch = ({
  onFilterPokemons,
  resetPokemonsIfSearchIsEmpty,
}: HomePokemonSearchProps) => {
  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const searchTerm = formData.get("search") as string;

    onFilterPokemons(searchTerm);
  };

  return (
    <form
      className="mb-4 flex items-center justify-start"
      onSubmit={onFormSubmit}
      data-testid="pokemon-list-search"
    >
      <Input
        type="text"
        name="search"
        label="search"
        isSrOnlyLabel={true}
        onChange={resetPokemonsIfSearchIsEmpty}
        dataTestId="pokemon-list-search-input"
      />

      <Button>Search</Button>
    </form>
  );
};

export default HomePokemonSearch;
