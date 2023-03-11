import { Circle, NavColumn, NavigationContent, Wrapper } from './Footer.styles';
import { Link, useHref, useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../const/routesName';
import { ReactNode, useCallback, useState } from 'react';
import NavigationItem from '../../molecules/NavigationItem/NavigationItem';
import { StyledLink } from '../../../styles/override/Link.styles';
import Typography from '../../atoms/Typography/Typography';
import { FormattedMessage } from 'react-intl';
import TransactionIcon from '../../../assets/images/navigationIcons/transaction.svg';
import HistoryIcon from '../../../assets/images/navigationIcons/history.svg';
import TableIcon from '../../../assets/images/navigationIcons/table.svg';
import MoreIcon from '../../../assets/images/navigationIcons/more.svg';
import messages from '../../../i18n/messages';
import NavigationPage from '../../pages/NavigationPage/NavigationPage';

export type TNavigationItems = {
  route: string;
  icon: any;
  text: ReactNode;
};

export type TProps = {
  isGroup?: boolean;
};

const Footer = (props: TProps) => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const navigate = useNavigate();

  const rootURL = useHref(RoutesName.ROOT);
  const transactionURL = useHref(RoutesName.ADD_TRANSACTIONS);
  const historyURL = useHref(RoutesName.HISTORY);
  const tableURL = useHref(RoutesName.TABLE);

  const navigationItems: TNavigationItems[] = [
    {
      icon: TransactionIcon,
      route: transactionURL,
      text: (
        <Typography size={'s'} weight={700}>
          <FormattedMessage {...messages.navigationTransaction} />
        </Typography>
      ),
    },
    {
      icon: HistoryIcon,
      route: historyURL,
      text: (
        <Typography size={'s'} weight={700}>
          <FormattedMessage {...messages.navigationHistory} />
        </Typography>
      ),
    },
    {
      icon: TableIcon,
      route: tableURL,
      text: (
        <Typography size={'s'} weight={700}>
          <FormattedMessage {...messages.navigationTable} />
        </Typography>
      ),
    },
  ];

  const toggleNavigation = useCallback(
    (open: boolean) => {
      setIsOpenNav(open);
    },
    [isOpenNav],
  );

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('groupId');
    localStorage.removeItem('userRole');
    navigate(RoutesName.LOGIN);
  }, []);

  return (
    <>
      <Wrapper isGroup={props.isGroup}>
        <Link to={rootURL}>
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

export default Footer;
