import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/globalStyles';
import { BrowserRouter } from 'react-router-dom';
import LanguageProvider, { Languages } from './i18n/intlUtils';
import { Routes } from './routes';

const App = () => {
  return (
    <LanguageProvider locale={Languages.POLISH}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes />
          <GlobalStyles />
        </ThemeProvider>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
