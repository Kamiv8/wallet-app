import { FunctionComponent, ReactElement, SVGProps } from 'react';
import {
  FormElement,
  HeadingElement,
  ImageElement,
  Wrapper,
} from './RegisterTemplate.styles';

type TProps = {
  Image: FunctionComponent<SVGProps<SVGSVGElement>>;
  Heading: ReactElement;
  Form: ReactElement;
};

export const RegisterTemplate = ({ Image, Heading, Form }: TProps) => (
  <Wrapper>
    <ImageElement>
      <Image />
    </ImageElement>
    <HeadingElement>{Heading}</HeadingElement>
    <FormElement>{Form}</FormElement>
  </Wrapper>
);
