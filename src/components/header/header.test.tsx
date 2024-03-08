import { render, screen } from "@testing-library/react";

import { HOME_ROUTE, INVENTORY_ROUTE } from "@/src/constants/routes.constants";
import Header from "./header";

const selectors = {
  HOME_LINK: "home-link",
  INVENTORY_LINK: "inventory-link",
};

const mockUsePathname = jest.fn().mockReturnValue(HOME_ROUTE);

jest.mock("next/navigation", () => ({
  usePathname: () => {
    return mockUsePathname();
  },
}));

describe("Header komponens", () => {
  it("should have home link with proper href", () => {
    render(<Header />);
    const homeLink = screen.getByTestId(selectors.HOME_LINK);

    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", HOME_ROUTE);
  });

  it(`should highlight the home link when active url is ${HOME_ROUTE}`, () => {
    render(<Header />);
    const homeLink = screen.getByTestId(selectors.HOME_LINK);

    expect(homeLink).toHaveClass("text-blue-500");
  });

  it("should have inventory link with proper href", () => {
    render(<Header />);
    const inventoryLink = screen.getByTestId(selectors.INVENTORY_LINK);

    expect(inventoryLink).toBeInTheDocument();
    expect(inventoryLink).toHaveAttribute("href", INVENTORY_ROUTE);
  });
});
