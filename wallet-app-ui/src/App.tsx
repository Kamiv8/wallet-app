import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/globalStyles';
import { BrowserRouter } from 'react-router-dom';
import LanguageProvider, { Languages } from './i18n/intlUtils';
import { Routes } from './routes';
import { Provider } from 'react-redux';
import store from './redux/store';
import ModalRunnerUtil from './utils/ModalRunner.util';

const App = () => {
  return (
    <Provider store={store}>
      <LanguageProvider locale={Languages.POLISH}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Routes />
            <GlobalStyles />
            <ModalRunnerUtil />
          </ThemeProvider>
        </BrowserRouter>
      </LanguageProvider>
    </Provider>
  );
};

export default App;
