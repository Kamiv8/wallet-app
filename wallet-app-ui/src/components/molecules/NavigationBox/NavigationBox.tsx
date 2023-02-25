import { FunctionComponent, SVGProps } from 'react';
import { Typography } from '../../atoms/Typography/Typography';
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
};

const NavigationBox = ({
  Image,
  name,
  notificationsNumber,
  routeName,
}: TProps) => {
  const href = useHref(routeName);
  return (
    <StyledLink to={href}>
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

export default NavigationBox;
