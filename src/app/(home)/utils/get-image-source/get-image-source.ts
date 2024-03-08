import { PokemonDetail } from "@/src/interfaces/pokemon-detail.interface";

const getImageSource = (sprites: PokemonDetail["sprites"]) => {
  return sprites.front_default || sprites.front_shiny || "";
};

export default getImageSource;
