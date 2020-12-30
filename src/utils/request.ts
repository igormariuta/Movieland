import Url from 'url';

import config from '../config/config';

async function req<T>(pathname: string, query?: object): Promise<T> {

  const endpoint = {
    ...config.server,
    pathname: pathname,
    query: {...query, ...config.key}
  };

  const uri = Url.format(endpoint);
  return fetch(uri).then((res) => {
    if (!res.ok) {
      throw new Error("Not OK")
    }
    return res.json();
  });
}

export default req;