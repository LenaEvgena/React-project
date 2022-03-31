import React from 'react';
import { createPages } from '../../../utils/createPages';
import classNames from 'classnames';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../../redux/actions';
import './Pages.scss';

const Pages: React.FC = () => {
  const dispatch = useDispatch();
  const { totalPages, currentPage, isFetching } = useTypedSelector((state) => state);
  let clsPages = classNames('page', { 'busy': isFetching });
  const pages: Array<number> = [];

  createPages(pages, totalPages, currentPage);

  return (
    <div className="pages">
      {pages.map((page, index) => <span
        className={currentPage === page ? `${clsPages} active` : clsPages}
        key={index}
        onClick={() => dispatch(setCurrentPage(page))}>{page}</span>)}
    </div>
  )
};

export default Pages;
