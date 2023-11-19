import { describe } from "vitest";
import { render, screen } from "@testing-library/react";

import Card from "../components/Card/Card";
import { card } from "../data/mock-data";
import { Provider } from "react-redux";
import { store } from "../app/redux/store";

describe("Card", () => {
  beforeEach(async () => {
    render(
      <Provider store={store}>
        <Card data={card} />;
      </Provider>,
    );
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
});
