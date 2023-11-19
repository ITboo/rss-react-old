import { render, screen } from "@testing-library/react";
import App from "../app/App";
import { Provider } from "react-redux";
import { store } from "../app/redux/store";

describe("App", () => {
  it("renders a main page", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("src", "../../../public/logo.png");
    expect(logo).toHaveAttribute("alt", "logo");
  });
});
