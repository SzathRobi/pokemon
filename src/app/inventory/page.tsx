import { getAllCatchedPokemons } from "@/src/utils/catched-pokemon";

import InventoryCard from "./components/inventory-card/inventory-card";
import InventoryEmptyInventory from "./components/inventory-empty-inventory/inventory-empty-inventory";

const InventoryPage = async () => {
  const catchedPokemons = await getAllCatchedPokemons();

  return (
    <div data-testid="inventory-page">
      {catchedPokemons?.length ? (
        catchedPokemons.map((catchedPokemon: any) => (
          <InventoryCard key={catchedPokemon.id} name={catchedPokemon.name} />
        ))
      ) : (
        <InventoryEmptyInventory />
      )}
    </div>
  );
};

export default InventoryPage;
