import Link from "next/link";

import { PokemonResult } from "@/src/interfaces/pokemon-result.interface";

type HomePokemonListCardProps = {
  offset: string;
  pokemon: PokemonResult;
  getIsActiveCard: (pokemonName: string) => boolean;
};

const HomePokemonListCard = ({
  offset,
  pokemon,
  getIsActiveCard,
}: HomePokemonListCardProps) => {
  return (
    <div
      className={`${
        getIsActiveCard(pokemon.name) ? "bg-blue-100" : "bg-transparent"
      } rounded border hover:bg-blue-50`}
      data-testid="pokemon-list-card"
    >
      <Link href={`/?offset=${offset}&name=${pokemon.name}`} key={pokemon.name}>
        <h2 className="p-6">{pokemon.name}</h2>
      </Link>
    </div>
  );
};

export default HomePokemonListCard;
