import { Component, FormEvent, createRef } from "react";
import "./Search.css";

type SearchProps = {
  searchValue: string;
  handleSubmit: (value: string) => void;
};

class Search extends Component<SearchProps> {
  private searchRef = createRef<HTMLInputElement>();
  constructor(props: SearchProps) {
    super(props);
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

  setLocalStorage(): void {
    localStorage.setItem("formData", JSON.stringify(this.state));
  }
  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    this.props.handleSubmit(this.searchRef.current?.value || "");
  };
  render() {
    return (
      <div className="search__wrapper">
        <form onSubmit={this.handleSubmit}>
          <input
            type="search"
            className="search__input"
            id="search"
            name="searchValue"
            ref={this.searchRef}
            value={this.props.searchValue}
            autoFocus={true}
          />
        </form>
        <button
          type="submit"
          className="search__btn"
          onClick={this.handleSubmit.bind(this)}
        >
          Search
        </button>
      </div>
    );
  }
}
export default Search;
