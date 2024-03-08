import { PokemonResult } from "./pokemon-result.interface";

export interface PokemonApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonResult[];
}
