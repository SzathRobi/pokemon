import { PokemonSprites } from "@/src/interfaces/pokemon-sprites.interface";

export const mockSpritesWithDefaultAndShinyUrl: PokemonSprites = {
  back_default: null,
  back_female: null,
  back_shiny: null,
  back_shiny_female: null,
  front_default: "front_default_image",
  front_female: null,
  front_shiny: "front_shiny_image",
  front_shiny_female: null,
};

export const mockSpritesWithDefaultUrl: PokemonSprites = {
  back_default: null,
  back_female: null,
  back_shiny: null,
  back_shiny_female: null,
  front_default: "front_default_image",
  front_female: null,
  front_shiny: null,
  front_shiny_female: null,
};

export const mockSpritesWithShinyUrl: PokemonSprites = {
  back_default: null,
  back_female: null,
  back_shiny: null,
  back_shiny_female: null,
  front_default: null,
  front_female: null,
  front_shiny: "front_shiny_image",
  front_shiny_female: null,
};

export const mockSpritesWithoutUrl: PokemonSprites = {
  back_default: null,
  back_female: null,
  back_shiny: null,
  back_shiny_female: null,
  front_default: null,
  front_female: null,
  front_shiny: null,
  front_shiny_female: null,
};
