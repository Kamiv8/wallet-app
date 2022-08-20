import { IntlProvider } from 'react-intl';
import React, { ReactNode, FC } from 'react';
import Poland from './languages/pl.json';
import English from './languages/en.json';

export enum Languages {
  ENGLISH = 'en-us',
  POLISH = 'pl-pl',
}

type TProps = {
  children: ReactNode;
  locale: Languages;
};

const LanguageProvider: FC<TProps> = ({
  children,
  locale = Languages.ENGLISH,
}) => {
  const messages = {
    [Languages.ENGLISH]: English,
    [Languages.POLISH]: Poland,
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
};

export default LanguageProvider;
