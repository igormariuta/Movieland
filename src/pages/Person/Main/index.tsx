import React, { useEffect, useState } from 'react';
import s from './Main.module.scss';
import cn from 'classnames';
// import InfoLine from '../InfoLine';

import placehold from '../../../assets/img/placeholder.png';
// import { Link } from 'react-router-dom';
import { IPerson } from '../../../types/interfaces';
import InfoLine from '../InfoLine';

interface IProps {
  data?: IPerson;
  className?: string
}

const Main:React.FC<IProps> = ({data}) =>  {

  const [fullBiography, setFullBiography] = useState(true);

  useEffect(() => {
    if (data && data.biography.length > 500) {
      setFullBiography(false);
    }
  }, [data]);

  const toggleFullBiography = () => {
    setFullBiography(state => !state)
  }

  return (
    <div className="row mb-4">

      <div className={cn('col-4 col-md-3', s.posterContainer)} > 
        {
          data && <img 
            src={data.profile_path ? `https://image.tmdb.org/t/p/w500${data.profile_path}` : placehold}
            className="card-img-top card-img-bottom"
            alt={data?.name} 
            loading="lazy"/>
        }
      </div>

      <div className="col-8 d-md-none d-flex flex-column justify-content-center">
        <h5 className='text-white mb-3'>{data?.name}</h5>
        <InfoLine data={data} />
      </div>
      
      <div className="col-12 col-md-9 d-flex flex-column justify-content-center">

        <div className='d-none d-md-block'>
          <h3 className='text-white mb-4'>{data?.name}</h3>
          <InfoLine data={data} />
        </div>

        {
          data?.biography ? 
          <div>
            <h6 className='text-secondary'>Biography</h6>
            <div className='text-white'>
              { 
                fullBiography ? (
                  data?.biography.split('\n').map((item, i) => (
                    <p key={i}>{item}</p>
                  ))
                ) : <p> {data?.biography.slice(0, 500) + "..." } </p>
              } 
            </div>
            {
              !fullBiography ?
              <button className="d-inline btn badge badge-secondary"
                onClick={toggleFullBiography}> Read more
              </button> : null
            }
          </div> : null
        }

      </div>
      
    </div>
  );
 
};

export default Main;
