import { FC, FunctionComponent, SVGProps } from 'react';
import { StyledLi, StyledNavLink, StyledTypography } from './NavLinkLi.styled';
import { TFormattedMessage } from '../../../types/types';
import { FormattedMessage } from 'react-intl';

type Props = {
  route: string;
  Image: FunctionComponent<SVGProps<SVGSVGElement>>;
  name: TFormattedMessage;
};

export const NavLinkLi: FC<Props> = ({ route, Image, name }) => {
  return (
    <StyledLi>
      <StyledNavLink to={route}>
        <Image />
        <StyledTypography size={'l'} weight={700}>
          <FormattedMessage {...name} />
        </StyledTypography>
      </StyledNavLink>
    </StyledLi>
  );
};
