import { Component } from "react";
import "./Main.css";
import CardList from "../../components/CardList/CardList";
import { fetchedData } from "../../service/api-service";
import { CardData } from "../../types/types";

type PageState = {
  data: CardData | null;
  searchValue: string;
};

class Main extends Component {
  state: PageState = {
    data: null,
    searchValue: window.localStorage.getItem("formData") || "",
  };

  componentDidMount(): void {
    this.fetchItems(this.state.searchValue);
  }
  fetchItems = (searchValue: string) => {
    fetchedData(searchValue).then((data) => {
      this.setState({ data });
    });
  };
  render() {
    return (
      <main className="main">
        <CardList response={this.state.data} />
      </main>
    );
  }
}
export default Main;
