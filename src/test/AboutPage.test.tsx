import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import AboutPage from "../pages/AboutPage/AboutPage";
import { Provider } from "react-redux";
import { store } from "../app/redux/store";

describe("About Page", () => {
  it("renders About page", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <AboutPage />
        </Provider>
      </BrowserRouter>,
    );
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
  });
});
