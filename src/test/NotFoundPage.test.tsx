import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import { Provider } from "react-redux";
import { store } from "../app/redux/store";

describe("NotFound Page", () => {
  it("ensures that the 404 page is displayed when navigating to an invalid route.", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <NotFoundPage />
        </Provider>
      </BrowserRouter>,
    );
    expect(
      screen.getByText("Ooops, sorry! Nothing is found..."),
    ).toBeInTheDocument();
  });
});
