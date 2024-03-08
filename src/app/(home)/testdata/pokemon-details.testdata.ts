import { PokemonDetail } from "@/src/interfaces/pokemon-detail.interface";

export const mockPokemonCharmanderDetails: PokemonDetail = {
  abilities: [
    {
      ability: {
        name: "blaze",
        url: "https://pokeapi.co/api/v2/ability/66/",
      },
      is_hidden: false,
      slot: 1,
    },
  ],
  base_experience: 62,
  height: 6,
  id: 4,
  name: "charmander",
  sprites: {
    back_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
    back_female: null,
    back_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png",
    back_shiny_female: null,
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    front_female: null,
    front_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
    front_shiny_female: null,
  },
  stats: [
    {
      base_stat: 39,
      effort: 0,
      stat: {
        name: "hp",
        url: "https://pokeapi.co/api/v2/stat/1/",
      },
    },
    {
      base_stat: 52,
      effort: 0,
      stat: {
        name: "attack",
        url: "https://pokeapi.co/api/v2/stat/2/",
      },
    },
    {
      base_stat: 43,
      effort: 0,
      stat: {
        name: "defense",
        url: "https://pokeapi.co/api/v2/stat/3/",
      },
    },
    {
      base_stat: 60,
      effort: 0,
      stat: {
        name: "special-attack",
        url: "https://pokeapi.co/api/v2/stat/4/",
      },
    },
    {
      base_stat: 50,
      effort: 0,
      stat: {
        name: "special-defense",
        url: "https://pokeapi.co/api/v2/stat/5/",
      },
    },
    {
      base_stat: 65,
      effort: 1,
      stat: {
        name: "speed",
        url: "https://pokeapi.co/api/v2/stat/6/",
      },
    },
  ],
  types: [
    {
      slot: 1,
      type: {
        name: "fire",
        url: "https://pokeapi.co/api/v2/type/10/",
      },
    },
  ],
  weight: 85,
};
