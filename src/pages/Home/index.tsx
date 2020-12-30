import React, { useEffect, useState } from 'react';
import LayoutMain from '../../components/LayoutMain';
import ApiService from '../../services/api';
import { IMovies } from '../../types/interfaces';

import Carousel from 'react-bootstrap/Carousel'; 
import s from './Home.module.scss';
import { Link, NavLink } from 'react-router-dom';

const HomePage = () =>  {

  // const [data, setData] = useState<IMovies | null>(null);
  // const api = new ApiService();

  // useEffect(() => {

  //   api.getNowPlaying(1).then((body) => {
  //     setData(body);
  //     console.log("set 1", body);
  //   });

  // }, []);

  return (
    <LayoutMain>

      <div className="row mb-5" style={{display: 'none'}}>

        <div className="col-9">
          {/* <Carousel>
            {data && data.results.map((item) => (
              <Carousel.Item key={item.id}>

                {
                  item.backdrop_path ? 
                    <img
                    className="d-block w-100 rounded"
                    src={"https://image.tmdb.org/t/p/original" + item.backdrop_path}
                    alt="First slide"
                  /> : null
                }
              
                <Carousel.Caption className={s.caption}>
                  <NavLink to={`/movies/${item.id}`}>
                    <h4>{item.title}</h4>
                    <p className={s.overview}>{item.overview}</p>
                  </NavLink>
                </Carousel.Caption>
            
              </Carousel.Item>
            ))}
          </Carousel> */}
        </div>

        <div className="col-3">
        </div>

      </div>  
      
      <div className="text-white mb-3">
        <h4>In Development</h4>
        <p>
          <Link className='p-0 text-primary' to='/movies'>Go to Movies</Link>
        </p>
      </div>

    


      {/* <h4 className='text-white'>
        What to watch
      </h4> */}

    </LayoutMain>
  );
 
};

export default HomePage;
