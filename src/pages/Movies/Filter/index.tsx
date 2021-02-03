import React, { useEffect, useState } from 'react';

import cn from 'classnames';
import s from './Filter.module.scss';

import { GridFill, FunnelFill } from 'react-bootstrap-icons';
import { Dropdown } from 'react-bootstrap';
import { IQuery } from '../../../types/interfaces';
import { useHistory, useLocation, useParams } from 'react-router-dom';

interface IProps {
  changeView?: () => void;
  gridView?: boolean;
  filter: string,
  changeFilter: (filter: string) => void
}

interface IMoviesFilter {
  [n: string]: string
}

const FILTERS: IMoviesFilter = {
  'Now Playing': 'now_playing',
  'Popular': 'popular',
  'Top Rated': 'top_rated',
}

const DiscoverFilter: React.FC<IProps> = ({gridView, changeView, filter, changeFilter}) => {

  return (
    <div className={cn("row no-gutters justify-content-between align-items-center mb-4", s.filterBar)}>

      <div className="row no-gutters">

        { 
          <Dropdown>
            <Dropdown.Toggle variant='' className='p-1 text-primary'>
              { Object.keys(FILTERS).find(key => FILTERS[key] === filter) } &nbsp;
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {
                Object.keys(FILTERS).map(item => (
                  <Dropdown.Item key={item} onClick={() => {
                    changeFilter(FILTERS[item])
                  }}>{item}</Dropdown.Item>
                ))
              }
            </Dropdown.Menu>
          </Dropdown>
        }

      </div>

      <div className="filter text-secondary d-flex align-center">

        {/* <button className="btn p-1 d-flex mr-3" onClick={toggleShowFilter}>
          <FunnelFill size={19} className={ showFilter ? 'text-primary' : 'text-secondary'}/>
        </button> */}

        <button className="btn p-1 d-flex" onClick={changeView}>
          { <GridFill size={19} className={ gridView ? 'text-primary' : 'text-secondary'}/> }
        </button>
     
      </div>

    </div>

  );

};

export default DiscoverFilter