import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import AboutPage from "../pages/AboutPage/AboutPage";

describe("About Page", () => {
  it("renders About page", () => {
    render(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>,
    );
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
  });
});
