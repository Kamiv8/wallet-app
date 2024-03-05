import MediaQuery from 'react-responsive';
import { ReactNode } from 'react';
import theme from '../styles/theme';

type Props = {
  children: ReactNode | Array<ReactNode>;
};
export const Tablet = ({ children }: Props) => (
  <MediaQuery minWidth={theme.mediaQueries.tablet.min as number}>
    {children}
  </MediaQuery>
);
