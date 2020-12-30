import React from 'react';
import { Treview } from '../../../types/types';
import Review from './Review';

interface IProps {
  reviews: Treview[];
}

const Reviews:React.FC<IProps> = ({reviews}) =>  {

  return (
    <div className='row'>
      {
        reviews.map((item) => (
          <div key={item.id} className='col-12 mb-4'>
            <Review review={item}/>
          </div>
        ))
      }
    </div>
  );
 
};

export default Reviews;
