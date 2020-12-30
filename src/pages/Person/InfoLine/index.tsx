import React from 'react';
import s from './InfoLine.module.scss';
import cn from 'classnames';
import { CalendarEvent, GeoAltFill, Star } from 'react-bootstrap-icons';
import convertDate from '../../../utils/dateToString';
import { IPerson } from '../../../types/interfaces';

interface IProps {
  data?: IPerson;
  className?: string
}

const InfoLine :React.FC<IProps> = ({data}) =>  {

  return (
    <div className={cn('d-flex flex-wrap mb-4 p-2 pl-3 pr-3 rounded', s.infoLine)}>

      {
        data?.known_for_department ?
        <div className={cn('mr-4')}>
          <Star size={14} className='text-primary mr-2' />
          <small className='text-primary m-0'>{data && data.known_for_department}</small>
        </div> : null
      }

      {
        data?.birthday ? (
          <div className={cn('mr-4')}>
            <CalendarEvent size={14} className={cn('mr-2','text-secondary ') } />
            <small className='text-secondary m-0'>{data && convertDate(data.birthday) }</small> 

            {
              data?.deathday ? (
                <>
                  <span className='text-secondary ml-2 mr-2'>/</span>
                  <small className='text-secondary m-0'>{data && convertDate(data.deathday) }</small> 
                </>
              ) : null
            }
  
          </div>
        ) : null
      }
      
      {
        data?.place_of_birth ?
        <div className={cn('mr-4')}>
          <GeoAltFill size={14} className='text-secondary mr-2' />
          <small className='text-secondary m-0'> { data && data.place_of_birth } </small>
        </div> : null
      }

    </div>

  );
 
};

export default InfoLine;
