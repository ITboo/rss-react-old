import { Component } from "react";

import Card from "../Card/Card";
import { CardData } from "../../types/types";

import "./CardList.css";
import Loader from "../Loader/Loader";

type ListProps = {
  response: CardData | null;
};

export default class CardList extends Component<ListProps> {
  constructor(props: ListProps) {
    super(props);
  }

  render() {
    return !this.props.response ? (
      <Loader></Loader>
    ) : (
      <ul className="cards__wrapper">
        {this.props.response.results ? (
          this.props.response?.results.map((item) => {
            return <Card key={item.id} props={item}></Card>;
          })
        ) : (
          <div>Nothing has found</div>
        )}
      </ul>
    );
  }
}
