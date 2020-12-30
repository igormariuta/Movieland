import React, { useEffect, useMemo, useState } from 'react';
import { NavLink, Redirect, Route, Switch, useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';
import LayoutMain from '../../components/LayoutMain';
import { Tcredits } from '../../types/types';

import s from './Item.module.scss';
import cn from 'classnames';

import useData from '../../hooks/useData';
import Loading from '../../components/Loading';
import { ITv } from '../../types/interfaces';
import Main from './Main';

interface IProps {
  id?: string;
}

const TvPage = () =>  {

  let { id } = useParams<IProps>();
  // let { search } = useLocation();
  // let history = useHistory();

  // let { path, url } = useRouteMatch();

  const { data, isLoading, isError } = useData<ITv>({endpoint: `/tv/${id}`}, [id]);

  // const { data:credits, isLoading:creditsLoading, isError:creditsError } = useData<Tcredits>({endpoint: `/movie/${id}/credits`}, [id]);
  // const { data:recommends, isLoading:recommendsLoading, isError:recommendsError } = useData<IMovies>({endpoint: `/movie/${id}/recommendations`}, [id]);
  // const { data:reviews, isLoading:reviewsLoading, isError:reviewsError } = useData<IReviews>({endpoint: `/movie/${id}/reviews`}, [id]);

  return (
    <LayoutMain>

      { 
        isLoading ? <Loading /> : 
        data ? (
          <>

            <Main data={data}/>

          </>
        ) : null
      }

    </LayoutMain>
  );
 
};

export default TvPage;