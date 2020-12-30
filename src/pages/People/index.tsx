import React from 'react';
import { Link } from 'react-router-dom';
import LayoutMain from '../../components/LayoutMain';
import useData from '../../hooks/useData';
import { IPeople } from '../../types/interfaces';

const PeoplePage = () => {

  const { data, isLoading, isError } = useData<IPeople>({endpoint: '/person/popular'}, []);

  console.log(data)

  return (
    <LayoutMain>

      <div className="text-white mb-3">
        <h4>In Development</h4>
        <p>
          <Link className='p-0 text-primary' to='/movies'>Go to Movies</Link>
        </p>
      </div>

    </LayoutMain>
  );

};

export default PeoplePage;
