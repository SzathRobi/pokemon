import { CatchedPokemon } from "@prisma/client";

import { db } from "@/src/lib/db";

export const getAllCatchedPokemons = async (): Promise<
  CatchedPokemon[] | null
> => {
  try {
    const allCatchedPokemons = await db.catchedPokemon.findMany();

    return allCatchedPokemons;
  } catch {
    return null;
  }
};

export const getCatchedPokemonByName = async (
  name: string,
): Promise<CatchedPokemon | null> => {
  try {
    const pokemon = await db.catchedPokemon.findUnique({ where: { name } });

    return pokemon;
  } catch {
    return null;
  }
};

export const deleteCatchedPokemonByName = async (
  name: string,
): Promise<string | null> => {
  try {
    await db.catchedPokemon.delete({ where: { name } });

    return name;
  } catch {
    return null;
  }
};
