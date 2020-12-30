import React from 'react';
import cn from 'classnames';
import s from './Pagination.module.scss';
import usePagination from './usePagination';

interface IProps {
  current: number;
  total: number;
  changePage: (page: number) => void
}

const Pagination: React.FC<IProps> = ({current, total, changePage}) => {

  const props = {
    count: total,
    onChange: changePage,
    page: current,
  };

  const { items } = usePagination({ ...props });

  return (
    <nav className='pt-2'>
      <ul className="pagination m-0">
        {items.map((item, index) => {

          switch(item.type) {
            case 'start-ellipsis':
            case 'end-ellipsis':
              return (
                  <li key={index} className="page-item">
                    <div className={cn('page-link', s.link)}>...</div>
                  </li>
                )
            break;
            case 'page':
            case 'next':
            case 'previous':
              return (
                <li key={index} className="page-item">
                  <button className={cn('page-link', s.link, {[s.active]: item.selected}, {[s.disabled]: item.disabled})}
                    onClick={() => item.page ? changePage(item.page) : null} > 
                    { 
                      item.type === 'page' ? item.page :
                      item.type === 'next' ? '>' : '<'
                    } 
                  </button>
                </li>
              )
            break;
          }
           
        })}
      </ul>
    </nav>
  );
 
}

export default Pagination;