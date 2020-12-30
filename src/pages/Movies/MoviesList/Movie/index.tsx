import React from "react";
import { Link } from "react-router-dom";

import cn from "classnames";

import sCard from "./Card.module.scss";
import sRow from "./Row.module.scss";

import { StarFill, CalendarEvent, PersonFill } from 'react-bootstrap-icons';
import convertDate from "../../../../utils/dateToString";

import placehold from '../../../../assets/img/placeholder.png';
import { IMovie } from "../../../../types/interfaces";

interface IProps {
  movie: IMovie;
}

export const MovieCard: React.FC<IProps> = ({ movie }) => (
  <div className={cn("card mb-4", sCard.card)}>
    <Link to={`/movies/${movie.id}`} className={cn("poster", sCard.poster)}>
      <img
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : placehold}
        className="card-img-top card-img-bottom"
        alt={movie.title}
        loading="lazy"
      />
      <div className={sCard.title}>
        <p>{movie.title}</p>
      </div>
    </Link>
    <div className={sCard.info}>
      <div className='d-flex align-items-center'>
        <StarFill size={14} className={cn('mr-2', movie.vote_average ? 'text-primary' : 'text-secondary ') } 
          style={ movie.vote_average ? {opacity: (movie.vote_average / 10 )} : {} } />
        <small>{movie.vote_average}</small>
      </div>

      {
        movie.release_date ?
        <div className='d-flex align-items-center'>
          <CalendarEvent size={14} className='text-secondary mr-2'/>
          <small className='d-none d-lg-inline '>{ convertDate(movie.release_date) }</small>
          <small className='d-inline d-lg-none'>{ convertDate(movie.release_date, 'sm') }</small>
        </div> : null
      }
      
    </div>

    {/* <div className={sCard.buttons}>
      <button className={cn(sCard.btn, 'd-flex btn p-0')} onClick={() => {console.log('her')}}>
        <BookmarkPlusFill size={25} className='text-primary' />
      </button>
      <button className={cn(sCard.btn, 'd-flex btn p-0')} onClick={() => {console.log('her')}}>
        <BookmarkStar size={25} className='text-primary' />
      </button>
    </div> */}
 
  </div>
);

export const MovieRow: React.FC<IProps> = ({ movie }) => (
  <div className={cn("list-group-item", sRow.row)}>

    <Link to={`/movies/${movie.id}`} className={cn(sRow.link)}>

      <div className="row align-items-center">
        <div className={cn("col-1", sRow.colLeft)}>
          <div className={cn("poster", sRow.poster)}>
            <img
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : placehold}
              className="card-img-top card-img-bottom"
              alt={movie.title}
              loading="lazy"
            />
          </div>
        </div>

        <div className={cn("col-11 pl-1", sRow.colRight)}>

          <p className={cn(sRow.title, 'text-white mb-2')}>
            {movie.title}
          </p>

          <p className={cn(sRow.rating, 'd-flex align-items-center m-0')}>
            <StarFill size={14} className={cn('mr-2', movie.vote_average ? 'text-primary' : 'text-secondary ') } 
              style={ movie.vote_average ? {opacity: (movie.vote_average / 10 )} : {} } />
            <small className='text-secondary mr-3'>{movie.vote_average}</small> 

            <PersonFill size={16} className='text-secondary mr-2'/>
            <small className='text-secondary'>{movie.vote_count}</small> 

            {
              movie.release_date ?
                <span className='d-flex align-items-center text-secondary ml-auto'>
                <CalendarEvent size={14} className='text-secondary mr-2' />
                <small className='d-none d-sm-inline '>{ convertDate(movie.release_date) }</small>
                <small className='d-inline d-sm-none'>{ convertDate(movie.release_date, 'sm') }</small>
              </span> : null
            }
            
          </p>

        </div>

        {/* <div className="col-3 d-flex  align-items-center justify-content-end">
          <div className={cn(sRow.calendar, 'd-flex align-items-center ')}>
            <CalendarEvent size={14} className='text-secondary mr-2' />
            <small className='text-secondary'>
              { convertDate(movie.release_date) }
            </small>
          </div>
        </div>  */}
        
      </div>
    </Link>

  </div>

);

