import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

describe("NotFound Page", () => {
  it("ensures that the 404 page is displayed when navigating to an invalid route.", () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>,
    );
    expect(
      screen.getByText("Ooops, sorry! Nothing is found..."),
    ).toBeInTheDocument();
  });
});
