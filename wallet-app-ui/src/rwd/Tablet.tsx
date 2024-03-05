import MediaQuery from 'react-responsive';
import { ReactNode } from 'react';
import theme from '../styles/theme';

type Props = {
  children: ReactNode | Array<ReactNode>;
};
export const Tablet = ({ children }: Props) => (
  <MediaQuery maxWidth={theme.mediaQueries.tablet.max as number}>
    {children}
  </MediaQuery>
);
