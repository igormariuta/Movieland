import { useEffect, useState } from 'react';
import { IQuery } from '../types/interfaces';
import req from '../utils/request';

const useData = <T>(query: IQuery, deps: any[] = []) => {
  
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {

    const getData = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const result = await req<T>(query.endpoint, query.query);
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if ( query.endpoint === '' ) {
      setIsLoading(false)
      setData(null)
    } else {
      getData();
    }

  }, deps);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;
