import { Component } from "react";
import { data } from "../../types/data";
import Card from "../../components/Card/Card";
import "./Main.css";

class Main extends Component {
  render() {
    const cards = data.map((item) => {
      return (
        <Card
          key={item.id}
          name={item.name}
          description={item.description}
          id={item.id}
          img={item.img}
        />
      );
    });
    return (
      <main className="main">
        <div className="cards__wrapper">{cards}</div>
      </main>
    );
  }
}
export default Main;
