import { ReactNode } from 'react';
import {
  Content,
  GroupNavBoxes,
  Header,
  LogoutWrapper,
  NavBoxes,
  UserDataWrapper,
  Wrapper,
} from './NavigationTemplate.styles';
import { Typography } from '../../atoms';

export type TProps = {
  title: ReactNode;
  closeIcon: ReactNode;
  userData: ReactNode;
  personNavigation: ReactNode;
  logoutIcon: ReactNode;
  groupNavigation?: ReactNode;
  hasGroup?: boolean;
};

export const NavigationTemplate = (props: TProps) => {
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
        {props.hasGroup && (
          <GroupNavBoxes>
            <Typography
              weight={700}
              uppercase
              customColor={'#ffffffdd'}
              size={'l'}
            >
              Group
            </Typography>
            <NavBoxes>{props.groupNavigation}</NavBoxes>
          </GroupNavBoxes>
        )}
      </Content>
      <LogoutWrapper>{props.logoutIcon}</LogoutWrapper>
    </Wrapper>
  );
};
