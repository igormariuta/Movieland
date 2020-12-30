import React, { useState } from 'react';
import cn from 'classnames';
// import { CalendarEvent, GeoAltFill, GridFill, Star } from 'react-bootstrap-icons';
// import convertDate from '../../../utils/dateToString';
// import { IPersonMovies } from '../../../types/interfaces';
// import useData from '../../../hooks/useData';

import s from '../ActivityList.module.scss';
import MoviesList from '../../../Movies/MoviesList';
import { ArrowBarDown, ArrowsAngleContract, ArrowsAngleExpand, ArrowsCollapse, ArrowsExpand, BoxArrowDown } from 'react-bootstrap-icons';

interface IProps {
  className?: string;
  list: any;
  gridView: boolean, 
  categoryTitle: any
}

const Category:React.FC<IProps> = ({list, gridView, categoryTitle}) =>  {

  const [collapse, setCollapse] = useState(false);

  const toggleCollaspe = () => {
    setCollapse(state => !state);
  }

  return (
    <>
      <div className={cn('d-flex justify-content-between align-items-center rounded  mb-3',  s.listTitle)} onClick={toggleCollaspe}>
        <h6 className='text-white mb-0'> { categoryTitle + " " } 
          <span className='badge badge-secondary ml-2'>{list.length}</span> 
        </h6>
        <div className='btn p-0 pl-1 pr-1 text-secondary'>
          { !collapse ? <ArrowsCollapse size={19} /> : <ArrowsExpand size={19}/> }
        </div>
      </div>
      
      { 
        !collapse ? <MoviesList list={list} gridView={gridView} /> : null
      }
     
    </>
  )
 
};

export default Category;
