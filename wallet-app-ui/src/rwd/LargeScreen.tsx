import MediaQuery from 'react-responsive';
import theme from '../styles/theme';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode | Array<ReactNode>;
};
export const LargeScreen = ({ children }: Props) => (
  <MediaQuery minWidth={theme.mediaQueries.desktop.min as number}>
    {children}
  </MediaQuery>
);
