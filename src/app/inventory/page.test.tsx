import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { getAllCatchedPokemons } from "@/src/utils/catched-pokemon";
import { mockCatchedCharmander } from "../(home)/testdata/catched-pokemons.testdata";

import InventoryPage from "./page";

const selectors = {
  INVENTORY_CARD: "inventory-card",
  EMPTY_INVENTORY: "empty-inventory",
};

jest.mock("../../utils/catched-pokemon.ts");
const mockedGetAllCatchedPokemons =
  getAllCatchedPokemons as jest.MockedFunction<typeof getAllCatchedPokemons>;

describe("Inventory Page", () => {
  describe("when has catched pokemon", () => {
    beforeEach(() => {
      mockedGetAllCatchedPokemons.mockReturnValue(
        Promise.resolve([mockCatchedCharmander]),
      );
    });

    it("should render inventory card", async () => {
      render(await (async () => await InventoryPage())());
      const inventoryCrd = screen.getByTestId(selectors.INVENTORY_CARD);

      expect(inventoryCrd).toBeInTheDocument();
    });
  });

  describe("when has no catched pokemon", () => {
    beforeEach(() => {
      mockedGetAllCatchedPokemons.mockReturnValue(Promise.resolve([]));
    });

    it("should render empty inventory list", async () => {
      render(await (async () => await InventoryPage())());
      const emptyInventory = screen.getByTestId(selectors.EMPTY_INVENTORY);

      expect(emptyInventory).toBeInTheDocument();
    });
  });
});
