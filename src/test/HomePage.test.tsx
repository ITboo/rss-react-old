import { describe, it } from "vitest";
import { render, screen, act, waitFor } from "@testing-library/react";

import HomePage from "../pages/HomePage/HomePage";

describe("Home page", () => {
  beforeEach(async () => {
    await act(async () => {
      render(<HomePage />);
    });
  });

  it("renders some cards", async () => {
    const cards = await waitFor(() => screen.getAllByTestId("card"));
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.getByText("Morty Smith")).toBeInTheDocument();
    expect(screen.getByText("Summer Smith")).toBeInTheDocument();

    const firstCard = cards[0];
    const secondCard = cards[1];
    const thirdCard = cards[2];

    expect(firstCard).toBeInTheDocument();
    expect(secondCard).toBeInTheDocument();
    expect(thirdCard).toBeInTheDocument();
  });
});
