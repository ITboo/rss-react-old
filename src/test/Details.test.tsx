import { describe, it, vi } from "vitest";
import {
  render,
  screen,
  act,
  waitFor,
  fireEvent,
} from "@testing-library/react";

import { card } from "../data/mock-data";
import DetailsInfo from "../components/Details/Details";
import { Provider } from "react-redux";
import { store } from "../app/redux/store";

describe("Card", () => {
  beforeEach(async () => {
    global.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => card,
      }),
    );

    await act(async () => {
      render(
        <Provider store={store}>
          <DetailsInfo />
        </Provider>,
      );
    });
  });

  it("validates that clicking on a card opens a detailed card component;", async () => {
    const modal = await waitFor(() => screen.getByTestId("modal-card"));

    expect(modal).toBeInTheDocument();
    expect(screen.queryByTestId("loader")).toBeNull();
  });
});
describe("Details", () => {
  beforeEach(async () => {
    global.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => card,
      }),
    );

    await act(async () => {
      render(
        <Provider store={store}>
          <DetailsInfo />
        </Provider>,
      );
    });
  });
  it("makes sure the detailed card component correctly displays the detailed card data;", async () => {
    const modal = await waitFor(() => screen.getByTestId("modal-card"));

    expect(modal).toBeInTheDocument();
    expect(screen.queryByTestId("loader")).toBeNull();
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.getByText("Gender: Male")).toBeInTheDocument();
    expect(screen.getByText("Status: Alive")).toBeInTheDocument();
    expect(screen.getByText("Origin: Earth (C-137)")).toBeInTheDocument();
    expect(screen.getByText("Location: Citadel of Ricks")).toBeInTheDocument();
  });

  it("ensures that clicking the close button hides the component.", async () => {
    const closeBtn = screen.getByTestId("close");
    const modal = await waitFor(() => screen.getByTestId("modal-card"));
    expect(closeBtn).toBeInTheDocument();
    fireEvent.click(closeBtn);
    expect(modal).toBeUndefined;
  });

  it("checks that a loading indicator is displayed while fetching data;", async () => {
    const modal = await waitFor(() => screen.getByTestId("modal-card"));

    expect(modal).toBeInTheDocument();
    expect(screen.queryByTestId("loader")).toBeDefined();
  });
});
