import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/globalStyles';
import { BrowserRouter } from 'react-router-dom';
import LanguageProvider from './i18n/intlUtils';
import { Routes } from './routes';
import { Provider } from 'react-redux';
import store from './redux/store';
import ModalRunnerUtil from './utils/ModalRunner.util';
import ApplicationContext from './contexts/application.context';
import { useReducer } from 'react';
import {
  applicationReducer,
  initialContextState,
} from './contexts/application.reducer';

const App = () => {
  const [state, dispatch] = useReducer(applicationReducer, initialContextState);

  return (
    <Provider store={store}>
      <ApplicationContext.Provider value={{ state, dispatch }}>
        <LanguageProvider locale={state.language}>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <Routes />
              <GlobalStyles />
              <ModalRunnerUtil />
            </ThemeProvider>
          </BrowserRouter>
        </LanguageProvider>
      </ApplicationContext.Provider>
    </Provider>
  );
};

export default App;
