import React, { useEffect, useMemo, useState } from 'react';
import { NavLink, Redirect, Route, Switch, useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';
import LayoutMain from '../../components/LayoutMain';
import { Tcredits } from '../../types/types';

import s from './Item.module.scss';
import cn from 'classnames';

import useData from '../../hooks/useData';
import Loading from '../../components/Loading';
// import {CalendarEvent, PersonFill, StarFill, Film, Stopwatch, ChatQuote } from 'react-bootstrap-icons';
// import convertDate from '../../utils/dateToString';
// import minToTime from '../../utils/minToTime';
import Main from './Main';
// import { PersonFill } from 'react-bootstrap-icons';
import Cast from './Cast';
import Recommendations from './Recommendations';
import Reviews from './Reviews';
import { IMovie, IMovies, IReviews } from '../../types/interfaces';

interface IProps {
  id?: string;
}

const MoviePage = () =>  {

  let { id } = useParams<IProps>();
  // let { search } = useLocation();
  let history = useHistory();

  let { path, url } = useRouteMatch();

  const { data, isLoading, isError } = useData<IMovie>({endpoint: `/movie/${id}`}, [id]);

  const { data:credits, isLoading:creditsLoading, isError:creditsError } = useData<Tcredits>({endpoint: `/movie/${id}/credits`}, [id]);
  const { data:recommends, isLoading:recommendsLoading, isError:recommendsError } = useData<IMovies>({endpoint: `/movie/${id}/recommendations`}, [id]);
  const { data:reviews, isLoading:reviewsLoading, isError:reviewsError } = useData<IReviews>({endpoint: `/movie/${id}/reviews`}, [id]);

  const {director, writer} = useMemo(() => {
    const director = credits?.crew.filter((item) => (item.job.toLowerCase() === 'director'));
    const writer = credits?.crew.filter((item) => (item.job.toLowerCase() === 'writer'));
    return { director, writer }
  }, [credits]);

  return (
    <LayoutMain>

      { 
        isLoading ? <Loading /> : 
        data ? (
          <>

            <Main data={data} director={director} writer={writer} />
            
            <ul className={cn("nav nav-tabs pl-3 mt-4", s.nav)}>

              <li className="nav-item">
                <NavLink to={`${url}/recommend`} className={cn("nav-link")} >
                    <span className='d-none d-sm-inline'>Recommendations</span>
                    <span className='d-inline d-sm-none'>Recomm.</span>
                </NavLink>
              </li>

              {
                credits && credits?.cast.length ?
                  <li className="nav-item">
                    <NavLink to={`${url}/cast`} className={cn("nav-link")} >Cast</NavLink>
                  </li> : null
              }

              {
                reviews && reviews.results.length ? 
                  <li className="nav-item">
                    <NavLink to={`${url}/reviews`} className={cn("nav-link")} >
                      Reviews 
                      <span className="badge badge-secondary ml-2">
                        {reviews.results && reviews.results.length}
                      </span>
                    </NavLink>
                  </li> : null
              }

            </ul>

            <div className={cn('rounded pt-4 pr-4 pl-4', s.tabsContent)}>

              <Switch>
                <Route exact path={`${url}/recommend`}>
                  <> 
                    {
                      recommendsLoading ? <Loading /> :
                      recommends? <Recommendations data={recommends} /> : null
                    }
                  </>
                </Route>
                <Route exact path={`${url}/cast`}>
                  { credits ? <Cast credits={credits} /> : null  }
                </Route>
                <Route exact path={`${url}/reviews`}>
                  { reviews ? <Reviews reviews={reviews.results} /> : null }
                </Route>
                <Redirect from='*' to={`${url}/recommend`} />
              </Switch>
              
            </div>

          </>
        ) : null
      }

    </LayoutMain>
  );
 
};

export default MoviePage;