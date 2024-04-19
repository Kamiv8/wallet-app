import { FunctionComponent, SVGProps } from 'react';
import { Typography } from '../../atoms';
import {
  ImageContainer,
  StyledLink,
  TextWrapper,
  Wrapper,
} from './NavigationBox.styles';
import { useHref } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { TFormattedMessage } from '../../../types/types';
import { useRwd } from '../../../hooks';

export type TProps = {
  Image: FunctionComponent<SVGProps<SVGSVGElement>>;
  name: TFormattedMessage;
  routeName: string;
  notificationsNumber?: number;
};

export const NavigationBox = ({
  Image,
  name,
  notificationsNumber,
  routeName,
}: TProps) => {
  const { getRwdValue } = useRwd();
  const href = useHref(routeName);
  return (
    <StyledLink to={href}>
      <Wrapper notificationsNumber={notificationsNumber}>
        <ImageContainer>
          <Image />
        </ImageContainer>
        <TextWrapper>
          <Typography size={getRwdValue('s', 'm', 'm')} weight={700}>
            <FormattedMessage {...name} />
          </Typography>
        </TextWrapper>
      </Wrapper>
    </StyledLink>
  );
};
