import { createContext } from 'react';
import { initialContextState } from './application.reducer';

export default createContext(initialContextState);
