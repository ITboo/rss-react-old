import { render, screen } from "@testing-library/react";
import App from "../app/App";

describe("App", () => {
  it("renders a main page", () => {
    render(<App />);
    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("src", "../../../public/logo.png");
    expect(logo).toHaveAttribute("alt", "logo");
  });
});
