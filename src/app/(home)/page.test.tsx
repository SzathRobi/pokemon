import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import HomePage from "./page";

jest.mock(
  "./components/home-pokemon-details-container/home-pokemon-details-container",
);
jest.mock(
  "./components/home-pokemon-list-container/home-pokemon-list-container",
);

const selectors = {
  HOME_PAGE: "home-page",
};

describe("Page", () => {
  it("should render pokemon list container", async () => {
    render(await (async () => await HomePage())());
    const homePage = screen.getByTestId(selectors.HOME_PAGE);

    expect(homePage).toBeInTheDocument();
  });
});
