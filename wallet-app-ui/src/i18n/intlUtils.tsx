import { IntlProvider } from 'react-intl';
import React, { ReactNode, FC } from 'react';
import Poland from './languages/pl.json';
import English from './languages/en.json';
import { LanguageType } from './languageType';

type TProps = {
  children: ReactNode;
  locale: string;
};

const LanguageProvider: FC<TProps> = ({
  children,
  locale = LanguageType.ENGLISH,
}) => {
  const messages = {
    [LanguageType.ENGLISH]: English,
    [LanguageType.POLISH]: Poland,
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
};

export default LanguageProvider;
