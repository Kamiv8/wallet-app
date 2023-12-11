import { FunctionComponent, SVGProps } from 'react';
import { Typography } from '../../atoms';
import {
  ImageContainer,
  StyledLink,
  TextWrapper,
  Wrapper,
} from './NavigationBox.styles';
import { useHref } from 'react-router-dom';

export type TProps = {
  Image: FunctionComponent<SVGProps<SVGSVGElement>>;
  name: string;
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
            {name}
          </Typography>
        </TextWrapper>
      </Wrapper>
    </StyledLink>
  );
};
