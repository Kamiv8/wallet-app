import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  background: none;
  border: 2px solid
    ${({ color, theme }) =>
      color === 'orange'
        ? theme.colors.orange
        : color === 'darkBlue'
        ? theme.colors.darkBlue
        : theme.colors.error};
  height: 70px;
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
  padding: 0 17px;
`;

export default StyledTextArea;
