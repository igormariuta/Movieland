import React from "react";
import { Link } from "react-router-dom";

import cn from "classnames";

import sCard from "./Card.module.scss";
import sRow from "./Row.module.scss";

import { StarFill, CalendarEvent, PersonFill } from 'react-bootstrap-icons';
import placeholder from '../../assets/img/placeholder.png';
import convertDate from "../../utils/dateToString";

interface IProps {
  item: ICard;
  type: string
}

export interface ICard {
  id: number,
  title: string,
  overview: string,
  poster: string,
  date: string,
  vote_average: number,
  vote_count: number
}

export const CardItem: React.FC<IProps> = ({ item, type }) => (
  <div className={cn("card mb-4", sCard.card)}>
    <Link to={`/${type}/${item.id}`} className={cn("poster", sCard.poster)}>
      <img
        src={item.poster ? `https://image.tmdb.org/t/p/w500${item.poster}` : placeholder}
        className="card-img-top card-img-bottom"
        alt={item.title}
        loading="lazy"
      />
      <div className={sCard.title}>
        <p>{item.title}</p>
      </div>
    </Link>
    <div className={sCard.info}>
      <div className='d-flex align-items-center'>
        <StarFill size={14} className={cn('mr-2', item.vote_average ? 'text-primary' : 'text-secondary ') } 
          style={ item.vote_average ? {opacity: (item.vote_average / 10 )} : {} } />
        <small>{item.vote_average}</small>
      </div>

      {
        item.date ?
        <div className='d-flex align-items-center'>
          <CalendarEvent size={14} className='text-secondary mr-2'/>
          <small className='d-none d-lg-inline '>{ convertDate(item.date) }</small>
          <small className='d-inline d-lg-none'>{ convertDate(item.date, 'sm') }</small>
        </div> : null
      }
      
    </div>
 
  </div>
);

export const CardItemRow: React.FC<IProps> = ({ item, type }) => (
  <div className={cn("list-group-item", sRow.row)}>

    <Link to={`/${type}/${item.id}`} className={cn(sRow.link)}>

      <div className="row align-items-center">
        <div className={cn("col-1", sRow.colLeft)}>
          <div className={cn("poster", sRow.poster)}>
            <img
              src={item.poster ? `https://image.tmdb.org/t/p/w500${item.poster}` : placeholder}
              className="card-img-top card-img-bottom"
              alt={item.title}
              loading="lazy"
            />
          </div>
        </div>

        <div className={cn("col-11 pl-1", sRow.colRight)}>

          <p className={cn(sRow.title, 'text-white mb-1')}>
            {item.title}
          </p>

          <p className='text-secondary overflow-hidden mb-2' 
            style={{whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
            <small>
              {item.overview}
            </small>
          </p>

          <p className={cn(sRow.rating, 'd-flex align-items-center m-0')}>
            <StarFill size={14} className={cn('mr-2', item.vote_average ? 'text-primary' : 'text-secondary ') } 
              style={ item.vote_average ? {opacity: (item.vote_average / 10 )} : {} } />
            <small className='text-secondary mr-3'>{item.vote_average}</small> 

            <PersonFill size={16} className='text-secondary mr-2'/>
            <small className='text-secondary'>{item.vote_count}</small> 

            {
              item.date ?
                <span className='d-flex align-items-center text-secondary ml-auto'>
                <CalendarEvent size={14} className='text-secondary mr-2' />
                <small className='d-none d-sm-inline '>{ convertDate(item.date) }</small>
                <small className='d-inline d-sm-none'>{ convertDate(item.date, 'sm') }</small>
              </span> : null
            }
            
          </p>

        </div>
        
      </div>
    </Link>

  </div>

);

