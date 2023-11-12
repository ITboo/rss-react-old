import { describe, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import Card from "../components/Card/Card";
import { card } from "../shared/data/mock-data";

describe("Card", () => {
  beforeEach(async () => {
    const openModal = vi.fn();
    render(<Card data={card} openModal={openModal} />);
  });

  it("renders a card", () => {
    const card = screen.queryByTestId("card");
    expect(card).toBeDefined();
  });

  it("ensures that the card component renders the relevant card data", () => {
    expect(screen.getByRole("img")).toBeDefined();
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.queryByText("Earth (C-137)")).toBeNull();
  });

  it("validates that clicking on a card opens a detailed card component", () => {
    const click = screen.getByTestId("card");
    fireEvent.click(click);
    expect(window.location.pathname).toBe()
  });
});
