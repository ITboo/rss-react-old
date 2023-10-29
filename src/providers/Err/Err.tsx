import { Component, ReactNode } from "react";
import "./Err.css";

export class Err extends Component {
  throwError = async () => {
    throw new Error("Ooops. En error occured");
  };

  render(): ReactNode {
    return (
      <button
        title="throw error"
        className="err_btn"
        onClick={() => {
          this.throwError();
        }}
      >
        !
      </button>
    );
  }
}
