import React from 'react';
import Movies from '../../Movies/MoviesList';

interface IProps {
  data?: any;
}

const Recommendations:React.FC<IProps> = ({data}) =>  (
  <>
    { 
      data ? (
        <Movies list={data && data.results} gridView={true} />
      ) : null
    }
    {
      data && !data.results.length ? <p className='pb-4 mb-0 text-primary'>Nothing to Recommend</p> : null
    }
  </>
);

export default Recommendations;
