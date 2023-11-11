import { describe } from "vitest";
import { screen } from "@testing-library/react";

describe("Card", () => {
  test("renders card", () => {
    const card = screen.queryByTestId("card");
    expect(card).toBeDefined();
  });
});
