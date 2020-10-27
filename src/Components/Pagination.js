import React from "react";
import "../Styles/pagination.css";

const Pagination = ({ postsPerPage, totalPosts, paginate, nextPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginateUtil = (e, number) => {
    document.getElementsByClassName("active")[0].classList.remove("active");
    e.target.classList.add("active");
    paginate(number);
  };
  return (
    <div className="pagination">
      {pageNumbers.map((number) => {
        if (number == 1)
          return (
            <a
              onClick={(e) => paginateUtil(e, number)}
              className="active"
              href="!#"
            >
              {number}
            </a>
          );
        else
          return (
            <a onClick={(e) => paginateUtil(e, number)} href="!#">
              {number}
            </a>
          );
      })}
    </div>
  );
};

export default Pagination;
