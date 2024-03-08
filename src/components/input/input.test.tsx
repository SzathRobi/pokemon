import { render, screen } from "@testing-library/react";

import Input from "./input";

const selectors = {
  INPUT_SEARCH: "input-search",
  INPUT_LABEL: "input-label",
};

describe("Input", () => {
  describe("when isSrOnlyLabel is false", () => {
    it("should not have sr-only className", () => {
      render(<Input label="test-label" dataTestId={selectors.INPUT_SEARCH} />);
      const inputLabel = screen.getByTestId(selectors.INPUT_LABEL);

      expect(inputLabel).not.toHaveClass("sr-only");
    });
  });

  describe("when isSrOnlyLabel is true", () => {
    it("should have sr-only className", () => {
      render(<Input label="test-label" isSrOnlyLabel={true} />);
      const inputLabel = screen.getByTestId(selectors.INPUT_LABEL);

      expect(inputLabel).toHaveClass("sr-only");
    });
  });
});
