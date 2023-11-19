import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import upsertSearchParam from "../../app/utils/utils";
import { setItemsPerPage } from "../../app/redux/slices/limitSlice";
import "./Pagination.css";

const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page: number = Number(searchParams.get("page")) ?? 1;

  const pageChangeHandler = (newPage: number): void => {
    const updatedParams: URLSearchParams = upsertSearchParam(
      searchParams,
      "page",
      String(newPage),
    );
    setSearchParams(updatedParams);
  };
  const dispatch = useDispatch();

  const handlePerPageChange: (e: ChangeEvent<HTMLSelectElement>) => void = (
    e,
  ) => {
    dispatch(setItemsPerPage(e.target.value));
    pageChangeHandler(1);
  };

  return (
    <div className="pagination__wrapper">
      <div>
        <label>Select:</label>
        <select defaultValue="6" onChange={handlePerPageChange}>
          <option value="3">3</option>
          <option value="6">6</option>
          <option value="9">9</option>
          <option value="12">12</option>
        </select>
      </div>
      <div className="pagination">
        <button
          disabled={page === 1}
          onClick={() => pageChangeHandler(page - 1)}
          className="pagination__btn"
        >
          Prev Page
        </button>
        <div>{page}</div>
        <button
          onClick={() => pageChangeHandler(page + 1)}
          className="pagination__btn"
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Pagination;
