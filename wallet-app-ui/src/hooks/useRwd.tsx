import { useMediaQuery } from 'react-responsive';
import theme from '../styles/theme';

export const useRwd = () => {
  const isMobile = useMediaQuery({
    query: `(min-width: ${theme.mediaQueries.mobile.min}px)`,
  });
  const isTablet = useMediaQuery({
    query: `(min-width: ${theme.mediaQueries.tablet.min}px)`,
  });
  const isDesktop = useMediaQuery({
    query: `(min-width: ${theme.mediaQueries.desktop.min}px)`,
  });
  const isLargeScreen = useMediaQuery({
    query: `(min-width: ${theme.mediaQueries.largeScreen.min}px)`,
  });

  const getRwdValue = <T = string | number,>(
    mobile: T,
    tablet?: T,
    desktop?: T,
    largeScreen?: T,
  ) => {
    if (isLargeScreen && largeScreen) return largeScreen;
    if (isDesktop && desktop) return desktop;
    if (isTablet && tablet) return tablet;
    return mobile;
  };

  return {
    isMobile,
    isTablet,
    isDesktop,
    getRwdValue,
  };
};
