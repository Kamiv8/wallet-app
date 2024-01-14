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

export type TProps = {
  Image: FunctionComponent<SVGProps<SVGSVGElement>>;
  name: TFormattedMessage;
  routeName: string;
  notificationsNumber?: number;
  action?: () => void;
};

export const NavigationBox = ({
  Image,
  name,
  notificationsNumber,
  routeName,
  action,
}: TProps) => {
  const href = useHref(routeName);
  return (
    <StyledLink to={href} onClick={action}>
      <Wrapper notificationsNumber={notificationsNumber}>
        <ImageContainer>
          <Image />
        </ImageContainer>
        <TextWrapper>
          <Typography size={'s'} weight={700}>
            <FormattedMessage {...name} />
          </Typography>
        </TextWrapper>
      </Wrapper>
    </StyledLink>
  );
};
