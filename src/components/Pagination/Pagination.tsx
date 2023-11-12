import { Dispatch, SetStateAction } from "react";
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
