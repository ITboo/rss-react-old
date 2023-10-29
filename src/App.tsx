import { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";

import ErrorBoundary from "../src/providers/ErrorBoundary";
import { Err } from "./providers/Err/Err";

class App extends Component {
  constructor(props: object) {
    super(props);
    this.state = {
      cards: [],
      value: localStorage.getItem("value") || "",
    };
  }
  render() {
    return (
      <ErrorBoundary>
        <div className="container">
          <Header />
          <Err />
          <Main />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
