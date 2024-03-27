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

  const getRwdValue = <T = string | number,>(
    mobile: T,
    tablet?: T,
    desktop?: T,
  ) => {
    if (isMobile && !isTablet && !isDesktop && mobile) return mobile;
    if (isTablet && !isDesktop && tablet) return tablet;
    if (isDesktop && desktop) return desktop;
    return tablet ? tablet : mobile;
  };

  return {
    isMobile,
    isTablet,
    isDesktop,
    getRwdValue,
  };
};
