import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/globalStyles';
import { BrowserRouter } from 'react-router-dom';
import LanguageProvider, { Languages } from './i18n/intlUtils';

const App = () => {
  return (
    <LanguageProvider locale={Languages.POLISH}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
        </ThemeProvider>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
