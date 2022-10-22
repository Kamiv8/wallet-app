import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/globalStyles';
import { BrowserRouter } from 'react-router-dom';
import LanguageProvider, { Languages } from './i18n/intlUtils';
import { Routes } from './routes';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <LanguageProvider locale={Languages.POLISH}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Routes />
            <GlobalStyles />
          </ThemeProvider>
        </BrowserRouter>
      </LanguageProvider>
    </Provider>
  );
};

export default App;
