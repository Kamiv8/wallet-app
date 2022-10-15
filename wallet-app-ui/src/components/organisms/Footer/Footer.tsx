import { Circle, NavColumn, NavigationContent, Wrapper } from './Footer.styles';
import { Link, useHref } from 'react-router-dom';
import { RoutesName } from '../../../const/routesName';
import { ReactNode } from 'react';
import NavigationItem from '../../molecules/NavigationItem/NavigationItem';
import { StyledLink } from '../../../styles/override/Link.styles';
import Typography from '../../atoms/Typography/Typography';
import { FormattedMessage } from 'react-intl';
import TransactionIcon from '../../../assets/images/navigationIcons/transaction.svg';
import HistoryIcon from '../../../assets/images/navigationIcons/history.svg';
import TableIcon from '../../../assets/images/navigationIcons/table.svg';
import MoreIcon from '../../../assets/images/navigationIcons/more.svg';
import messages from '../../../i18n/messages';

export type TNavigationItems = {
  route: string;
  icon: any;
  text: ReactNode;
};

const Footer = () => {
  const rootURL = useHref(RoutesName.ROOT);
  const transactionURL = useHref(RoutesName.TRANSACTIONS);
  const historyURL = useHref(RoutesName.HISTORY);
  const tableURL = useHref(RoutesName.TABLE);
  const navigationURL = useHref(RoutesName.NAVIGATION);

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
    {
      icon: MoreIcon,
      route: navigationURL,
      text: (
        <Typography size={'s'} weight={700}>
          <FormattedMessage {...messages.navigationMore} />
        </Typography>
      ),
    },
  ];

  return (
    <Wrapper>
      <Link to={rootURL}>
        <Circle />
      </Link>
      <NavigationContent>
        <NavColumn>
          {navigationItems.slice(0, 2).map((nav) => (
            <StyledLink to={nav.route}>
              <NavigationItem icon={nav.icon} text={nav.text} />
            </StyledLink>
          ))}
        </NavColumn>
        <NavColumn>
          {navigationItems.slice(2).map((nav) => (
            <StyledLink to={nav.route}>
              <NavigationItem icon={nav.icon} text={nav.text} />
            </StyledLink>
          ))}
        </NavColumn>
      </NavigationContent>
    </Wrapper>
  );
};

export default Footer;
