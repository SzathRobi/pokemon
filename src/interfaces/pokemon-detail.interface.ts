import { PokemonAbility } from "./pokemon-ability.interface";
import { PokemonSprites } from "./pokemon-sprites.interface";
import { PokemonStat } from "./pokemon-stat.interface";
import { PokemonType } from "./pokemon-type.interface";

export interface PokemonDetail {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  abilities: PokemonAbility[];
  types: PokemonType[];
  stats: PokemonStat[];
  sprites: PokemonSprites;
}
