import styled from 'styled-components';
import { TFontSize, TTheme } from '../../../styles/theme';

type TFontProps = {
  size: keyof TFontSize;
};

export const OptionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 15px 0;
`;

export const Legend = styled.legend<TFontProps>`
  font-weight: ${({ theme }: { theme: TTheme }) => theme.weight['700']};
  font-size: ${({ size, theme }: TFontProps & { theme: TTheme }) =>
    theme.fonts[size]};
`;

export const Label = styled.label<TFontProps>`
  font-weight: ${({ theme }: { theme: TTheme }) => theme.weight['700']};
  font-size: ${({ size, theme }: TFontProps & { theme: TTheme }) =>
    theme.fonts[size]};
`;
