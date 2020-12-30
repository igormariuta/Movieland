import React from 'react';
import { IMovie } from '../../../types/interfaces';
import { MovieCard, MovieRow } from './Movie';

interface IProps {
  list: null | IMovie[];
  gridView: boolean;
  className?: string
}

const MoviesList: React.FC<IProps> = ({list, gridView}) => (

  <div className={ gridView ? 'row' : 'list-group mb-4' }>
    {
      list && list.map((item, i) => (
        gridView ? <MovieCard key={i * item.id} movie={item}/> : <MovieRow key={i * item.id} movie={item}/>
      ))
    }
  </div>
  
);

export default MoviesList;
