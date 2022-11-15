import styled from 'styled-components';
import { TTheme } from '../../../styles/theme';
import { ReactComponent as EditIcon } from '../../../assets/images/Edit.svg';

type TWrapper = {
  backgroundColor?: string;
};

export const Wrapper = styled.div<TWrapper>`
  background-color: ${({
    backgroundColor,
    theme,
  }: TWrapper & { theme: TTheme }) =>
    backgroundColor ? backgroundColor : theme.colors.lightBlue};
  padding: 15px;
  border-radius: 20px;
`;

export const FirstRow = styled.div`
  width: 100%;
  text-align: center;
`;

export const SecondRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const StyledEditIcon = styled(EditIcon)`
  cursor: pointer;
`;
