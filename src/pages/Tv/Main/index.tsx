import React from 'react';
import s from './Main.module.scss';
import cn from 'classnames';
import { ChatQuote } from 'react-bootstrap-icons';
// import InfoLine from '../InfoLine';

import placehold from '../../../assets/img/placeholder.png';
import { Link } from 'react-router-dom';
import { ITv} from '../../../types/interfaces';
import InfoLine from '../InfoLine';

interface IProps {
  data?: ITv;
}

const Main :React.FC<IProps> = ({data}) =>  {

  return (
    <div className="row">

      <div className={cn('col-4 col-md-3', s.posterContainer)} > 
        {
          data && <img 
            src={data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : placehold}
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
          data?.overview ? 
          <div className='mb-4'>
            <h6 className='text-secondary'>Overview</h6>
            <p className='text-white mb-0'>
              {data?.overview}
            </p>
          </div> : null
        }
    
        {
          data?.tagline ?
          <div className={cn('d-flex align-items-center justify-content-start mb-4')}>
            <span>
              <ChatQuote size={16} className='text-secondary mr-2' />
            </span>
            <p className='text-secondary m-0'>{data.tagline }</p>
          </div> : null
        }

        <div className={cn("d-flex flex-wrap", s.authors)}>

          {
            data?.created_by.length ?
              <div className='text-white mr-4'>
                <h6 className='text-secondary d-inline m-0 mr-1'>Created by: </h6>
                {
                  data.created_by.map((item: any, i: number) => 
                    <span key={item.id}>
                      <Link to={`/people/${item.id}`} className='text-white'>{item.name}</Link>
                      { i + 1 === data.created_by.length ? null : ', ' } 
                    </span>) 
                }
              </div>
            : null
          }
{/* 
          {
            writer && writer.length ? 
            <div className='text-white'>
              <h6 className='text-secondary d-inline m-0 mr-1'>Writer: </h6>
              {
                writer.map((item: any, i: number) => 
                  <span key={item.id}><Link to={`/people/${item.id}`} className='text-white'>{item.name}</Link>
                   { i + 1 === writer.length ? null : ', ' } 
                  </span>) 
              }
            </div> : null
          } */}

        </div>

      </div>
      
    </div>
  );
 
};

export default Main;
