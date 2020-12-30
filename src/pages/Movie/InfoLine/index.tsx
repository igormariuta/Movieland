import React from 'react';
import s from './InfoLine.module.scss';
import cn from 'classnames';
import { CalendarEvent, PersonFill, StarFill, Film, Stopwatch } from 'react-bootstrap-icons';
import convertDate from '../../../utils/dateToString';
import minToTime from '../../../utils/minToTime';
import { IMovie } from '../../../types/interfaces';

interface IProps {
  data?: IMovie;
  className?: string
}

const InfoLine :React.FC<IProps> = ({data}) =>  {

  return (
    <div className={cn('d-flex flex-wrap mb-4 p-2 pl-3 pr-3 rounded', s.infoLine)}>

      <div className={cn('d-flex align-items-center mr-4')}>
        <StarFill size={14} className={cn('mr-2', data?.vote_average ? 'text-primary' : 'text-secondary ') } 
            style={ data?.vote_average ? {opacity: (data?.vote_average / 10 )} : {} } />
        
        <small className={cn('m-0', data?.vote_average ? 'text-primary' : 'text-secondary')}>
          <strong>
            {data?.vote_average} 
          </strong>
        </small>

        <span className='text-secondary ml-2 mr-2'>/</span>

        <PersonFill size={16} className='text-secondary mr-2'/>
        <small className='text-secondary m-0'>{data && data.vote_count}</small>

      </div>

      {
        data?.release_date ?
        <div className={cn('mr-4')}>
          <CalendarEvent size={14} className='text-secondary mr-2' />
          <small className='text-secondary m-0'>{data && convertDate(data.release_date) }</small>
        </div> : null
      }
      
      {
        data?.runtime ?
        <div className={cn('mr-4')}>
          <Stopwatch size={14} className='text-secondary mr-2' />
          <small className='text-secondary m-0'>{data && minToTime(data.runtime) }</small>
        </div> : null
      }

      {
        data?.genres?.length ?
          <div className='text-secondary'>
          <Film size={14} className='text-secondary mr-2' />
          {
            data && data.genres.map(({name}) => {
              return <span className='text-secondary mr-2' key={name} style={{textDecoration: 'none'}}> <small>{name}</small> </span>
            })
          }
        </div> : null
      }

    </div>

  );
 
};

export default InfoLine;
