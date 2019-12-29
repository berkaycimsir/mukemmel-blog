import * as React from "react";
import {
  Pagination as PaginationComponent,
  PaginationProps
} from "semantic-ui-react";
import { Props } from "../../@types/interfaces/ComponentInterfaces/Pagination/pagination.interfaces";

const Pagination: React.FC<Props> = ({
  scrollTo,
  totalBlogs,
  currentPage,
  setCurrentPage,
  blogsPerPage
}) => {
  const onPageChange: Function = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    pageInfo: PaginationProps
  ) => {
    setCurrentPage(pageInfo.activePage as number);
    scrollTo && window.scrollTo(0, 0);
  };

  return (
    <PaginationComponent
      onPageChange={(
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        pageInfo: PaginationProps
      ) => onPageChange(e, pageInfo)}
      totalPages={Math.ceil(totalBlogs.length / blogsPerPage)}
      activePage={currentPage}
      ellipsisItem={null}
      boundaryRange={0}
      siblingRange={1}
      lastItem={null}
      firstItem={null}
    />
  );
};

export default Pagination;
