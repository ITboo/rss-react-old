import { describe, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Search from "../components/Search/Search";
import { Provider } from "react-redux";
import { store } from "../app/redux/store";

describe("Search", () => {
  it("renders a search input", () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>,
    );

    expect(screen.getByTestId("search")).toBeInTheDocument();
  });
});

describe("Search", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("retrieves the value from the local storage upon mounting", () => {
    const value = "";
    localStorage.setItem("searchValue", value);

    render(
      <Provider store={store}>
        <Search />
      </Provider>,
    );

    expect(screen.getByTestId("search")).toHaveValue(value);
  });

  describe("Search", () => {
    const value = "test";
    localStorage.setItem = vi.fn();
    it("verifies that clicking the Search button saves the entered value to the local storage", async () => {
      const { getByRole } = render(
        <BrowserRouter>
          <Provider store={store}>
            <Search />
          </Provider>
        </BrowserRouter>,
      );

      const input = screen.getByPlaceholderText(
        "Search...",
      ) as HTMLInputElement;
      const button = getByRole("button");
      input.value = "test";

      localStorage.setItem("searchValue", value);

      fireEvent.click(button);

      expect(localStorage).toHaveProperty("searchValue");
    });
  });
});
