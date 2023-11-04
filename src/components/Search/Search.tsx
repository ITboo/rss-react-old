import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { SearchProps } from "../../app/types/types";

import "./Search.css";

function Search({ setSearch }: SearchProps) {
  const [inputValue, setInputValue] = useState(
    localStorage.getItem("searchValue") ?? "",
  );
  const inputRef = useRef(inputValue);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("searchValue", inputValue ?? "");
    setSearch(inputValue);
  };

  useEffect(() => {
    inputRef.current = inputValue;
  }, [inputValue]);

  useEffect(() => {
    return () => {
      localStorage.setItem("searchValue", inputRef.current);
    };
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="search"
        className="search"
        type="text"
        value={inputValue}
        placeholder="Search..."
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
      />
      <button>Search</button>
    </form>
  );
}

export default Search;
