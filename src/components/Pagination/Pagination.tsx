import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ROUTE } from "../../app/constants/constants";

import { setCharactersOnPage } from "../../app/redux/slices/limitSlice";
import "./Pagination.css";

interface PaginationProps {
  nextPage: null | string;
  prevPage: null | string;
}

const Pagination = (props: PaginationProps) => {
  const navigate = useNavigate();
  const { pageNum } = useParams();
  const { nextPage, prevPage } = props;

  const dispatch = useDispatch();

  const onUpdateQuantity = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    const quantity = event.target.value;
    dispatch(setCharactersOnPage(Number(quantity)));
    navigate(ROUTE.MAIN);
  };

  return (
    <div className="pagination__wrapper">
      <div className="pages-btns__wrapper">
        <button
          disabled={!prevPage}
          className="pagination__btn"
          onClick={() => navigate(`/page=${prevPage?.slice(-1)}`)}
        >
          Previous
        </button>
        <button className="pagination__btn" data-testid="informer">
          {pageNum ? pageNum : 1}
        </button>
        <button
          disabled={!nextPage}
          className="pagination__btn"
          onClick={() => {
            navigate(`/page=${nextPage?.slice(-1)}`);
          }}
        >
          Next
        </button>
      </div>
      <div className="limit-wrapper">
        <form>
          {
            <select
              id="characters-number"
              className="limit-select"
              name="characters-number"
              data-testid="characters-number"
              onChange={(e) => onUpdateQuantity(e)}
              defaultValue={6}
            >
              <option value="3">3</option>
              <option value="6">6</option>
              <option value="9">9</option>
            </select>
          }
          <label htmlFor="characters-number">characters on page</label>
        </form>
      </div>
    </div>
  );
};

export default Pagination;
