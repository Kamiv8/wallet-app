import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';
import English from '../src/i18n/languages/en.json';
import Polish from '../src/i18n/languages/pl.json';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
const themes = [theme];

const intlMessages = {
  en: English,
  pl: Polish,
};

setIntlConfig({
  locales: ['en', 'pl'],
  defaultLocale: 'en',
  getMessages: (locale) => intlMessages[locale],
});

addDecorator(withThemesProvider(themes), ThemeProvider);
addDecorator(withIntl);
