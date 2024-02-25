import { Circle, NavColumn, NavigationContent, Wrapper } from './Footer.styles';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import { NavigationItem } from '../../molecules';
import { StyledLink } from '../../../styles/override/Link.styles';
import { Typography } from '../../atoms';
import { FormattedMessage } from 'react-intl';
import MoreIcon from '../../../assets/images/navigationIcons/more.svg';
import messages from '../../../i18n/messages';
import { NavigationPage } from '../../pages';
import { useFooter } from './useFooter';

export type TNavigationItems = {
  route: string;
  icon: string;
  text: ReactNode;
};

export type TProps = {
  isGroup?: boolean;
};

export const Footer = (props: TProps) => {
  const {
    logout,
    toggleNavigation,
    navigationItems,
    rootURL,
    rootGroupURL,
    isOpenNav,
  } = useFooter();
  return (
    <>
      <Wrapper isGroup={props.isGroup}>
        <Link to={props.isGroup ? rootGroupURL : rootURL}>
          <Circle />
        </Link>
        <NavigationContent>
          <NavColumn>
            {navigationItems.slice(0, 2).map((nav) => (
              <StyledLink to={nav.route} key={nav.route}>
                <NavigationItem
                  onClick={() => {}}
                  icon={nav.icon}
                  text={nav.text}
                />
              </StyledLink>
            ))}
          </NavColumn>
          <NavColumn>
            {navigationItems.slice(2).map((nav) => (
              <StyledLink to={nav.route} key={nav.route}>
                <NavigationItem
                  onClick={() => {}}
                  icon={nav.icon}
                  text={nav.text}
                />
              </StyledLink>
            ))}
            <NavigationItem
              icon={MoreIcon}
              onClick={toggleNavigation}
              text={
                <Typography size={'s'} weight={700}>
                  <FormattedMessage {...messages.navigationMore} />
                </Typography>
              }
            />
          </NavColumn>
        </NavigationContent>
      </Wrapper>

      {isOpenNav ? (
        <NavigationPage logout={logout} closeNav={toggleNavigation} />
      ) : null}
    </>
  );
};
