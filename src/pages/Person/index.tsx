import React from 'react';
import { useParams } from 'react-router-dom';
import LayoutMain from '../../components/LayoutMain';
import Loading from '../../components/Loading';
import useData from '../../hooks/useData';
import { IPerson } from '../../types/interfaces';
import ActivityList from './ActivityList';
import Main from './Main';

const PersonPage = () => {

  interface IProps {
    id?: string;
  }

  let { id } = useParams<IProps>();

  const { data, isLoading, isError } = useData<IPerson>({endpoint: `/person/${id}`}, [id]);

  // console.log(data)

  return (
    <LayoutMain>  

      { 
        isLoading ? <Loading /> : 
        data ? (
          <>
            <Main data={data} />
            <ActivityList id={id}/>
          </>
        ) : null
      }

    </LayoutMain>
  );

};

export default PersonPage;
