import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import { setSearchValue } from "../../app/redux/slices/searchSlice";

import "./Search.css";

function Search() {
  const searchValue = useAppSelector((state) => state.search.value);
  const [value, setValue] = useState(searchValue);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const dispatch = useAppDispatch();
  const handleOnClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(setSearchValue(value));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(setSearchValue(value));
      }}
    >
      <input
        id="search"
        className="search"
        type="text"
        placeholder="Search..."
        data-testid="search"
        onChange={handleOnChange}
        value={value}
        ref={inputRef}
      />
      <button onClick={handleOnClick}>Search</button>
    </form>
  );
}

export default Search;
