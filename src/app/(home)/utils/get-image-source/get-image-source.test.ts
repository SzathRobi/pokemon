import {
  mockSpritesWithDefaultAndShinyUrl,
  mockSpritesWithoutUrl,
  mockSpritesWithShinyUrl,
} from "../../testdata/pokemon-sprites.testdata";
import getImageSource from "./get-image-source";

describe("getImageSource", () => {
  it("returns front_default source if available", () => {
    const result = getImageSource(mockSpritesWithDefaultAndShinyUrl);

    expect(result).toBe("front_default_image");
  });

  it("returns front_shiny source if front_default is not available", () => {
    const result = getImageSource(mockSpritesWithShinyUrl);

    expect(result).toBe("front_shiny_image");
  });

  it("returns empty string if both front_default and front_shiny are not available", () => {
    const result = getImageSource(mockSpritesWithoutUrl);

    expect(result).toBe("");
  });
});
