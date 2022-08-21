import styled from 'styled-components';

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
  font-size: 15px;
  padding-left: 17px;
`;

export default StyledInput;
