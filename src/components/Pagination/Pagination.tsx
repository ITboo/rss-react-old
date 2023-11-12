import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import "./Pagination.css";

type PaginationProps = {
  totalPosts: number;
  postsPerPage: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};

const Pagination = (props: PaginationProps) => {
  const { totalPosts, postsPerPage, setCurrentPage } = props;
  const pages = [];
  const navigate = useNavigate();
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="pagination">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              navigate(`/${page}`);
              setCurrentPage(page);
            }}
            className="pagination__btn"
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
