import React from 'react';
import cn from 'classnames';
import s from './Drop.module.scss';
// import useData from '../../../../hooks/useData';
// import Movies from '../../../Movies';
import Loading from '../../../Loading';
// import useDebounce from '../../../../hooks/useDebounce';
// import MovieRow from '../../../MovieRow';
import { Link, useHistory } from 'react-router-dom';
import { CalendarEvent, PersonFill, Star, StarFill, Tv, Film } from 'react-bootstrap-icons';
import convertDate from '../../../../utils/dateToString';

import placehold from '../../../../assets/img/placeholder.png';
import { IMovie } from '../../../../types/interfaces';

interface IProps {
  list: null | IMovie[];
  isLoading?: boolean
  className?: string
}

const printMovie = (i:number, item:any) => (
  <div key={i * item.id} className={cn("list-group-item", s.row)}>
    <Link to={`/movies/${item.id}`} className={cn(s.link)}>
      <div className="row align-items-center">
        <div className={cn('col-2', s.colLeft)}>
          <div className={cn("poster", s.poster)}>
            <img src={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : placehold}
              className="card-img-top card-img-bottom" alt={item.title} loading="lazy" />
          </div>
        </div>

        <div className={cn('col-10 pl-0', s.colRight)}>
          <p className={cn(s.title, 'text-white mb-2')}>{item.title}</p>
          <p className={cn(s.rating, 'd-flex align-items-center m-0')}>
            <Film size={14} className='text-secondary mr-3'/>

            <StarFill size={14} className={cn('mr-2', item.vote_average ? 'text-primary' : 'text-secondary ') }  
              style={ item.vote_average ? {opacity: (item.vote_average / 10 )} : {} } />
            <small className='text-secondary mr-3'>{item.vote_average}</small> 

            <PersonFill size={16} className='text-secondary mr-2'/>
            <small className='text-secondary'>{item.vote_count}</small> 

            { item.release_date ? 
                <span className='d-flex align-items-center text-secondary' style={{marginLeft: 'auto'}}>
                <CalendarEvent size={14} className='text-secondary mr-2' />
                <small className='d-none d-md-inline '>{ convertDate(item.release_date) }</small>
                <small className='d-inline d-md-none'>{ convertDate(item.release_date, 'sm') }</small>
              </span> : null }
          </p>
        </div>
      </div>
    </Link>
  </div>
);

const printTv = (i:number, item:any) => (
  <div key={i * item.id} className={cn("list-group-item", s.row)}>
    <Link to={`/tv/${item.id}`} className={cn(s.link)}>
      <div className="row align-items-center">
        <div className={cn('col-2', s.colLeft)}>
          <div className={cn("poster", s.poster)}>
            <img src={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : placehold}
              className="card-img-top card-img-bottom" alt={item.name} loading="lazy" />
          </div>
        </div>

        <div className={cn('col-10 pl-0', s.colRight)}>
          <p className={cn(s.title, 'text-white mb-2')}>{item.name}</p>
          <p className={cn(s.rating, 'd-flex align-items-center m-0')}>
            <Tv size={14} className='text-secondary mr-3'/>

            <StarFill size={14} className={cn('mr-2', item.vote_average ? 'text-primary' : 'text-secondary ') }  
              style={ item.vote_average ? {opacity: (item.vote_average / 10 )} : {} } />
            <small className='text-secondary mr-3'>{item.vote_average}</small> 

            <PersonFill size={16} className='text-secondary mr-2'/>
            <small className='text-secondary'>{item.vote_count}</small> 

            { item.first_air_date ? 
                <span className='d-flex align-items-center text-secondary' style={{marginLeft: 'auto'}}>
                <CalendarEvent size={14} className='text-secondary mr-2' />
                <small className='d-none d-md-inline '>{ convertDate(item.first_air_date) }</small>
                <small className='d-inline d-md-none'>{ convertDate(item.first_air_date, 'sm') }</small>
              </span> : null }
          </p>
        </div>
      </div>
    </Link>
  </div>
);

const printPerson = (i:number, item:any, history:any) => (
  <div key={i * item.id} className={cn("list-group-item", s.row)}>
    <Link to={`/people/${item.id}`} className={cn(s.link)}>
      <div className="row align-items-center">

        <div className={cn('col-2', s.colLeft)}>
          <div className={cn("poster", s.poster)}>
            <img src={item.profile_path ? `https://image.tmdb.org/t/p/w500${item.profile_path}` : placehold}
              className="card-img-top card-img-bottom" alt={item.name} loading="lazy" />
          </div>
        </div>

        <div className={cn('col-5 pl-0', s.colRight)}>
          <p className={cn(s.title, 'text-white mb-2')}>{item.name}</p>
          <p className={cn(s.rating, 'd-flex align-items-center m-0')}>
            <Star size={14} className='text-primary mr-2' />
            <small className='text-secondary mr-3'>{item.known_for_department}</small> 
          </p>
        </div>

        <div className={cn('d-flex justify-content-end col-5 pl-0', s.colPosters)}>
          { item.known_for.map(({id, poster_path, title, media_type}: any) => (
              <div key={id} className={s.person}>
                <div className={s.personLink} key={id} 
                  onClick={(e) => { 
                      e.preventDefault(); 
                      if ( media_type === 'movie' ) {
                        history.push(`/movies/${id}`)
                      } else if (media_type === 'tv') {
                        history.push(`/tv/${id}`) 
                      }
                    }}>
                  <img src={poster_path? `https://image.tmdb.org/t/p/w500${poster_path}`: placehold} className='rounded' alt={title} title={title}/>
                </div>
              </div>
            )) }
        </div>
      </div>
    </Link>
  </div>
);

const Drop: React.FC<IProps> = ({list, isLoading}) => {

  const history = useHistory();

  return (
    <>
      { 
        isLoading ? <Loading /> : (
        <div className='list-group'>
          {
            list && list.map((item: any, i) => (
              item.media_type === "movie" ?
                printMovie(i, item) :
              item.media_type === "person" ?
                printPerson(i, item, history) :
              item.media_type === "tv" ?
                printTv(i, item) 
              : null
            ))
          }
        </div>
      )}
    </>
   
  );

};

export default Drop;