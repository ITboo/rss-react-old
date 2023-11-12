import { describe } from "vitest";
import { screen } from "@testing-library/react";

describe("Card", () => {
  it("renders card", () => {
    const card = screen.queryByTestId("card");
    expect(card).toBeDefined();
  });
});
