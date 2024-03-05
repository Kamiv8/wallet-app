import MediaQuery from 'react-responsive';
import { ReactNode } from 'react';
import theme from '../styles/theme';

type Props = {
  children: ReactNode | Array<ReactNode>;
};

export const Mobile = ({ children }: Props) => (
  <MediaQuery maxWidth={theme.mediaQueries.mobile.max as number}>
    {children}
  </MediaQuery>
);
