import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import s from './Search.module.scss';
import useData from '../../../hooks/useData';
import { IMovies, IQuery } from '../../../types/interfaces';
// import Movies from '../../Movies';
// import Loading from '../../Loading';
import useDebounce from '../../../hooks/useDebounce';
import Drop from './Drop';
import { Scrollbars } from 'react-custom-scrollbars';
import { useHistory } from 'react-router-dom';
// import useComponentVisible from '../../../hooks/useComponentVisible';

const Search = () => {

  const [ searchValue, setSearchValue ] = useState('');
  const debouncedValue = useDebounce(searchValue, 500);

  const [ query, setQuery ] = useState<IQuery>({ endpoint: '' });
  const { data, isLoading, isError } = useData<IMovies>(query, [debouncedValue]);

  const [ showDrop, setShowDrop ] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);

    setQuery(() => ({
      endpoint: (e.target.value) ? '/search/multi' : '',
      query: {
        query: e.target.value
      },
    }));
  };

  // Click Outside

  const ref:any = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = (e: any) => {
    if (ref.current.contains(e.target)) {
      setShowDrop(true);
      return;
    }
    setShowDrop(false);
  };

  // On URL change
  let history = useHistory();
  history.listen(() => {
    setShowDrop(false);
  })

  return (

    <div ref={ref} className={cn('', s.search)}>

      <form action="#" >
        <input type="text" value={searchValue} onChange={handleSearch} onKeyPress={() => handleSearch} className={cn("form-control")} placeholder="Search" 
          style={{background: 'rgba(255, 255, 255, .1)', border: 'none', color: '#fff'}}/>
      </form>

      <Scrollbars className={cn(s.results, {[s.show]: showDrop}) } autoHeight autoHeightMin={isLoading ? 103 : 0} autoHeightMax={515}>
        <Drop className={s.results} list={data && data.results} isLoading={isLoading} />
      </Scrollbars>
          
    </div>
   
  );

};

export default Search;