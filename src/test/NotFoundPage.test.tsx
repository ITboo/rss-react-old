import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

describe("NotFound Page", () => {
  it("renders Not found page", () => {
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
