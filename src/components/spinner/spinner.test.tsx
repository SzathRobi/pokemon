import { render, screen } from "@testing-library/react";

import Spinner from "./spinner";

const selectors = {
  SPINNER: "spinner",
};

describe("Spinner", () => {
  it("should create", () => {
    render(<Spinner />);
    const spinner = screen.getByTestId(selectors.SPINNER);

    expect(spinner).toBeInTheDocument();
  });
});
