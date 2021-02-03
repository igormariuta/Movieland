import React, { useEffect, useMemo, useReducer, useState } from "react";
import LayoutMain from "../../components/LayoutMain";
// 
import { IMovies, IQuery } from "../../types/interfaces";
// 
import cn from 'classnames';
import s from './Movies.module.scss';
// 
import useData from "../../hooks/useData";
import Loading from '../../components/Loading';
import MoviesList from "./MoviesList";
import DiscoverFilter from "./Filter";
import Pagination from "../../components/Pagination";
import { Link, useHistory, useLocation } from "react-router-dom";
import ErrorMessage from "../../components/Error";

interface Query {
  filter: string,
  page: number
}

const MoviesPage = () => {

  const [ gridView, setGridView ] = useState(true);

  let { search } = useLocation();
  let history = useHistory();

  const { filter, page } = useMemo(() => {

    let params = new URLSearchParams(search)!;
    let filter = params.get('filter') ? params.get('filter')! : 'now_playing';
    let page = params.get('page') ? +params.get('page')! : 1;
    return { filter, page }

  }, [search]);

  const initial: Query = {
    filter: filter,
    page: page,
  };

  useEffect(() => {

    if (search === '') {
      history.push(`?filter=${filter}&page=${page}`)
    }

    dispatch({ type: 'setAll', filter, page });

  }, [filter, page, search]);

  const reducer = (prev: Query, action: any): Query => {
    switch (action.type) {
      case 'setAll': 
        return {
          filter: action.filter,
          page: action.page
        };
      default:
        throw new Error();
    }
  }

  // //////

  const [ query, dispatch ] = useReducer(reducer, initial);
  const { data, isLoading, isError } = useData<IMovies>(
    {
      endpoint: `/movie/${query.filter}`, 
      query: { page: query.page }
    }, [query.filter, query.page]);

  // //////

  const changeView = () => {
    setGridView(() => !gridView);
  };

  const changePage = (page: number) => {
    history.push(`?filter=${query.filter}&page=${page}`)
  };

  const changeFilter = (filter: string) => {
    history.push(`?filter=${filter}&page=1`)
  };
  
  return (
    <LayoutMain>

      { 
        isLoading || isError ? <Loading /> :
        <> 
          <DiscoverFilter changeView={changeView} gridView={gridView} filter={query.filter} changeFilter={changeFilter} />
          <MoviesList list={data && data.results} gridView={gridView} />
          <Pagination changePage={changePage} current={data?.page || 0} total={data?.total_pages || 0} />
        </>
      }

      {
        isError ? <ErrorMessage /> : null
      }

    </LayoutMain>
    
  );
};

export default MoviesPage;
