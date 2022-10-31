import { FunctionComponent, ReactNode, SVGProps } from 'react';
import {
  ContentWrapper,
  HeadingWrapper,
  Wrapper,
} from './VerificationAccountTemplate.styles';

export type TProps = {
  Image: FunctionComponent<SVGProps<SVGSVGElement>>;
  heading?: ReactNode;
  children?: ReactNode | ReactNode[];
};

const VerificationAccountTemplate = ({ Image, children, heading }: TProps) => {
  return (
    <Wrapper>
      <Image />
      <HeadingWrapper>{heading}</HeadingWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </Wrapper>
  );
};

export default VerificationAccountTemplate;
