import { Component } from "react";
import "./Main.css";
import CardList from "../../components/CardList/CardList";

class Main extends Component {
  render() {
    return (
      <main className="main">
        <CardList />
      </main>
    );
  }
}
export default Main;
