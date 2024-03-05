import MediaQuery from 'react-responsive';
import theme from '../styles/theme';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode | Array<ReactNode>;
};
export const LargeScreen = ({ children }: Props) => (
  <MediaQuery maxWidth={theme.mediaQueries.desktop.max as number}>
    {children}
  </MediaQuery>
);
