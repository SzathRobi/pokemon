import { render, screen } from "@testing-library/react";

import { mockPokemonCharmander } from "@/src/app/(home)/testdata/pokemon.testdata";
import InventoryCard from "./inventory-card";

const selectors = {
  INVENTORY_CARD: "inventory-card",
};

describe("InventoryCard", () => {
  it("should create", () => {
    render(<InventoryCard name={mockPokemonCharmander.name} />);

    const inventoryCard = screen.getByTestId(selectors.INVENTORY_CARD);

    expect(inventoryCard).toBeInTheDocument();
  });
});
