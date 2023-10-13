import { Component, ChangeEvent } from "react";

class Search extends Component {
  constructor(props: Record<string, never> | Readonly<Record<string, never>>) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  state = JSON.parse(localStorage.getItem("formData") || "{}");

  componentDidMount(): void {
    if (localStorage.getItem("formData") !== null) {
      this.setState(this.state);
    }
  }

  componentDidUpdate(): void {
    this.setLocalStorage();
  }

  componentWillUnmount(): void {
    this.setLocalStorage();
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ searchValue: event.target.value });
    this.setLocalStorage();
  }

  handleSubmit(event: { preventDefault: () => void }): void {
    event.preventDefault();
    this.setLocalStorage();
  }

  setLocalStorage(): void {
    localStorage.setItem("formData", JSON.stringify(this.state));
  }

  render() {
    return (
      <div className="search__wrapper">
        <form onSubmit={this.handleSubmit}>
          <input
            type="search"
            className="search__input"
            id="search"
            name="searchValue"
            value={this.state.searchValue}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              this.handleChange(event)
            }
          />
          <button type="submit" className="search__btn">
            Search
          </button>
        </form>
      </div>
    );
  }
}
export default Search;
