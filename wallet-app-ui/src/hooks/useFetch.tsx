import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { devConfig } from '../const/config';

export const useGetFetch = (url: string) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get(url);

        if (data.status >= 400 || data.data === null) {
          console.log('coś poszło nie tak');
        }

        setState(data.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return { state };
};
