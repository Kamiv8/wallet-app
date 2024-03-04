import styled, { css } from 'styled-components';

const StyledInput = styled.input`
  background: none;
  border: 2px solid
    ${({ color, theme }) =>
      color === 'orange'
        ? theme.colors.orange
        : color === 'darkBlue'
        ? theme.colors.darkBlue
        : theme.colors.error};
  height: 32px;
  width: 100%;
  border-radius: 5px;
  font-size: 15px;
  padding: 0 17px;
  color: ${({ color, theme }) =>
    color === 'orange'
      ? theme.colors.orange
      : color === 'darkBlue'
      ? theme.colors.darkBlue
      : theme.colors.error};
  &::placeholder {
    color: ${({ color, theme }) =>
      color === 'orange'
        ? theme.colors.orangePlaceholder
        : color === 'darkBlue'
        ? theme.colors.darkBluePlaceholder
        : theme.colors.errorPlaceholder};
  }
  ${({ color }) =>
    color === 'error' &&
    css`
      ::-webkit-calendar-picker-indicator {
        filter: invert(52%) sepia(98%) saturate(3172%) hue-rotate(357deg)
          brightness(88%) contrast(100%);
      }
    `}
`;

export default StyledInput;
