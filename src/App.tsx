import { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ErrorBoundary from "../src/providers/ErrorBoundary";

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
      <div className="container">
        <Header />
        <ErrorBoundary>
          <Main />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
