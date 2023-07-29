import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './hooks/usePagination';
import { LayoutProvider } from './LayoutProvider';
const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });
  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }
  
  let lastPage = paginationRange[paginationRange.length - 1];

  const onNext = () => {
    onPageChange(lastPage !== currentPage ? currentPage + 1:currentPage);
  };

  const onPrevious = () => {
    onPageChange(1 !== currentPage ? currentPage - 1:currentPage);
  };

  return (
    <LayoutProvider className={'flex h-[10px] my-5 justify-center items-center'}>
        <ul
        className={classnames('flex list-none', { [className]: className })}
        >
        {/* Left navigation arrow */}
        <li
            className={classnames('px-5 cursor-pointer', {
            disabled: currentPage === 1
            })}
            onClick={onPrevious}
        >
            <div className="arrow left" >Previus</div>
        </li>
        {paginationRange.map(pageNumber => {
            
            // If the pageItem is a DOT, render the DOTS unicode character
            // if (pageNumber === DOTS) {
            // return <li className="px-3 cursor-pointer">&#8230;</li>;
            // }
            
            // Render our Page Pills
            return (
            <li
                className={classnames('px-5 cursor-pointer', {
                selected: pageNumber === currentPage, 'text-blue-600': pageNumber === currentPage
                })}
                onClick={() => onPageChange(pageNumber)}
            >
                {pageNumber}
            </li>
            );
        })}
        {/*  Right Navigation arrow */}
        <li
            className={classnames('px-5 cursor-pointer', {
            disabled: currentPage === lastPage
            })}
            onClick={onNext}
        >
            <div className="arrow right" >Next</div>
        </li>
        </ul>
    </LayoutProvider>
  );
};

export default Pagination;