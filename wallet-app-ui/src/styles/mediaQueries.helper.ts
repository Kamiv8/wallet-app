import { css } from 'styled-components';
import theme, { TMediaQueries } from './theme';

export const media = Object.keys(theme.mediaQueries).reduce(
  (acc: any, label) => {
    const key = label as keyof TMediaQueries;
    acc[key] = (...args: Parameters<typeof css>) => css`
      @media (min-width: ${theme.mediaQueries[key].min}px) {
        ${css(...args)}
      }
    `;
    return acc;
  },
  {} as TMediaQueries,
);
