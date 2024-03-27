import {
  AsideFooterWrapper,
  LogoWrapper,
  NavWrapper,
  Wrapper,
} from './Aside.styles';
import { ReactComponent as Logo } from '../../../assets/images/logo.svg';
import { RoutesName } from '../../../const';
import { StyledLink } from '../../../styles/override/Link.styles';
import { AsideNavigation } from '../../molecules/AsideNavigation/AsideNavigation';

export const Aside = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <StyledLink to={RoutesName.ROOT}>
          <Logo />
        </StyledLink>
      </LogoWrapper>
      <NavWrapper>
        <AsideNavigation />
      </NavWrapper>
      <AsideFooterWrapper />
    </Wrapper>
  );
};
