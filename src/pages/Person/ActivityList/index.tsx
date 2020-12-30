import React, { useMemo, useState } from 'react';
import cn from 'classnames';
import { CalendarEvent, GeoAltFill, GridFill, Star } from 'react-bootstrap-icons';
import convertDate from '../../../utils/dateToString';
import { IPersonMovies } from '../../../types/interfaces';
import useData from '../../../hooks/useData';

import s from './ActivityList.module.scss';
import Loading from '../../../components/Loading';
import Category from './Category';

interface IProps {
  id?: string;
  className?: string
}

const ActivityList:React.FC<IProps> = ({id}) =>  {

  const [ gridView, setGridView ] = useState(true);

  const { data, isLoading, isError } = useData<IPersonMovies>({endpoint: `/person/${id}/movie_credits`}, [id]);

  const changeView = () => {
    setGridView(() => !gridView);
  };

  // const castSorted = useMemo(() => {
  //   return data?.cast.sort((a, b) => new Date(b.release_date) < new Date(a.release_date) ? -1 : 1)
  // }, [data]);

  const sliceCrew = useMemo(() => {

    const slice = data?.crew.reduce(( acc: any, next: any ) => { 
      acc[next.department] = acc[next.department] ? [...acc[next.department], next] : [next]
      return acc;
    }, {})

    return data? (
      data.cast.length ? {
        Acting: data?.cast, ...slice
      } : slice 
    ) : null

  }, [data]);

  const crewSorted = useMemo(() => {
    return sliceCrew ? Object.entries(sliceCrew)
      .sort((a: any, b: any) => a[1].length < b[1].length ? 1 : -1)
      .map(([category, item]: any) => 
        [category, item.sort((a: any, b: any) => new Date(b.release_date ? b.release_date : 0) > new Date(a.release_date ? a.release_date : 0) ? 1 : -1 ) ]
      ) : null
  }, [sliceCrew]);

  return (

    <div>

      <div className='d-flex align-items-center justify-content-between'>
        <ul className={cn("nav nav-tabs pl-3", s.nav)}>
          <li className="nav-item">
            <button className={cn("nav-link active")} >
              <span className=''>Movies</span>
            </button>
          </li>
        </ul>
        <button className="btn p-1 d-flex mr-2" onClick={changeView}>
          { <GridFill size={19} className={ gridView ? 'text-primary' : 'text-secondary'}/> }
        </button>
      </div>
    
      <div className={cn('rounded pt-4 pr-4 pl-4 text-secondary', s.list)}>
        { 
          isLoading ? <Loading /> : 
          data ? (
              <>
                {
                  crewSorted ?
                    crewSorted.map(([category, list]: any) => (
                      <div className='category' key={category}>
                        <Category categoryTitle={category} list={list} gridView={gridView} />
                      </div>
                  )) : null
                }
            </>
          ) : null
        }
        </div>
    </div>

  )
 
};

export default ActivityList;
