import React, { useMemo } from 'react';
import { Tcredits } from '../../../types/types';
import s from './Cast.module.scss';
import cn from 'classnames';
import {  PersonFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

interface IProps {
  credits: Tcredits;
  className?: string
}

const Cast:React.FC<IProps> = ({credits}) =>  {

  const cast = useMemo(() => {
    return credits?.cast.sort((a: any, b: any) => (a.order > b.order) ? 1 : -1);
  }, [credits]);

  return (
    <div className="row">
      {
        cast && cast.map((item) => (
          <Link to={`/people/${item.id}`} key={item.id} 
            className={cn('col-4 col-sm-4 col-md-3 col-lg-2 mb-3', s.person)}>
            {
              item.profile_path ? 
              <div className={cn('rounded mb-2', s.img)} >
                <img 
                  src={'https://image.tmdb.org/t/p/w500' + item.profile_path}  
                  alt={item.name}
                  loading="lazy" />
              </div> :
              <div className={cn(s.imgPlaceholder, 'mb-2 text-primary')}>
                <PersonFill />
              </div>
            }
            <small className='text-white mb-0'>{item.name}</small>
            <small className='text-secondary'>{item.character}</small>
          </Link>
        ))
      }
    </div>
  );
 
};

export default Cast;
