import { render, screen } from "@testing-library/react";

import InventoryEmptyInventory from "./inventory-empty-inventory";

const selectors = {
  EMPTY_INVENTORY: "empty-inventory",
};

describe("InventoryEmptyInventory", () => {
  it("should create", () => {
    render(<InventoryEmptyInventory />);
    const emptyInventory = screen.getByTestId(selectors.EMPTY_INVENTORY);

    expect(emptyInventory).toBeInTheDocument();
  });
});
