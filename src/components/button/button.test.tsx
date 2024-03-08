import { render, screen } from "@testing-library/react";

import Button from "./button";

const selectors = {
  BUTTON: "button",
  SPINNER: "spinner",
};

describe("button component", () => {
  describe("when isLoading is false", () => {
    it("should display button", () => {
      render(<Button>button</Button>);

      const button = screen.getByTestId(selectors.BUTTON);

      expect(button).toBeInTheDocument();
    });
  });

  describe("when isLoading is true", () => {
    it("should display button with spinner", () => {
      render(<Button isLoading={true}>button</Button>);

      const spinner = screen.getByTestId(selectors.SPINNER);

      expect(spinner).toBeInTheDocument();
    });
  });
});
