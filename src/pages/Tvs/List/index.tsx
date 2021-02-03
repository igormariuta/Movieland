import React from 'react';
import { CardItem, CardItemRow, ICard } from '../../../components/CardItem';
import { IMovie } from '../../../types/interfaces';
import { MovieCard, MovieRow } from '../../Movies/MoviesList/Movie';

interface IProps {
  list: ICard[] | undefined;
  gridView: boolean;
  type: string,
  className?: string
}

const List: React.FC<IProps> = ({ list, gridView, type }) => (

  <div className={ gridView ? 'row' : 'list-group mb-4' }>
    {
      list && list.map((item, i) => (
        gridView ? 
          <CardItem key={i * item.id} item={item} type={type} /> :
          <CardItemRow key={i * item.id} item={item} type={type}/>
      ))
    }
  </div>
  
);

export default List;
