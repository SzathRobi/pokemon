import { Suspense } from "react";

import PokemonDetailsContainer from "./components/home-pokemon-details-container/home-pokemon-details-container";
import PokemonListContainer from "./components/home-pokemon-list-container/home-pokemon-list-container";

const HomePage = async () => {
  return (
    <main
      className="grid w-full grid-cols-1 md:grid-cols-2"
      data-testid="home-page"
    >
      <Suspense>
        <PokemonListContainer />
      </Suspense>

      <Suspense>
        <PokemonDetailsContainer />
      </Suspense>
    </main>
  );
};

export default HomePage;
