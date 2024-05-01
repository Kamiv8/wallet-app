import { environment } from '../environment';

export const devConfig = {
  baseURL: () => {
    return environment('REACT_APP_BACKEND');
  },
};
