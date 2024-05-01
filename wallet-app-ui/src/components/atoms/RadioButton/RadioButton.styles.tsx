import styled from 'styled-components';
import { TTheme } from '../../../styles/theme';

export const StyledRadioButton = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background: none;
  font: inherit;
  width: 1.55em;
  height: 1.55em;
  border: 3px solid ${({ theme }: { theme: TTheme }) => theme.colors.darkBlue};
  border-radius: 50%;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  &:before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em
      ${({ theme }: { theme: TTheme }) => theme.colors.darkBlue};
  }
  &:checked:before {
    transform: scale(1);
  }
`;
