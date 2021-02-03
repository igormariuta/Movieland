import React from 'react';
import LayoutMain from '../../components/LayoutMain';
import { Link } from 'react-router-dom';

const HomePage = () =>  {

  return (
    <LayoutMain>

      <div className="row mb-5" style={{display: 'none'}}>

        <div className="col-9">

        </div>

        <div className="col-3">
        </div>

      </div>  
      
      <div className="text-white mb-3">
        <p className='text-primary'>In Development</p>
      </div>

    </LayoutMain>
  );
 
};

export default HomePage;
