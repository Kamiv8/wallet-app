import { ReactNode } from 'react';
import {
  Content,
  Header,
  LogoutWrapper,
  NavBoxes,
  UserDataWrapper,
  Wrapper,
} from './NavigationTemplate.styles';
import Typography from '../../atoms/Typography/Typography';

export type TProps = {
  title: ReactNode;
  closeIcon: ReactNode;
  userData: ReactNode;
  personNavigation: ReactNode;
  logoutIcon: ReactNode;
  groupNavigation?: ReactNode;
};

const NavigationTemplate = (props: TProps) => {
  return (
    <Wrapper>
      <Header>
        <Typography size={'l'} weight={700}>
          {props.title}
        </Typography>
        {props.closeIcon}
      </Header>
      <Content>
        <UserDataWrapper>{props.userData}</UserDataWrapper>
        <NavBoxes>{props.personNavigation}</NavBoxes>
        {props.groupNavigation && <div>{props.groupNavigation}</div>}
      </Content>
      <LogoutWrapper>{props.logoutIcon}</LogoutWrapper>
    </Wrapper>
  );
};

export default NavigationTemplate;
