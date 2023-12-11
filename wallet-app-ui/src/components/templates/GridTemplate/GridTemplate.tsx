import { Wrapper } from './GridTemplate.styles';
import { ReactNode } from 'react';

type TProps = {
  children: ReactNode | ReactNode[];
};

export const GridTemplate = (props: TProps) => {
  return <Wrapper>{props.children}</Wrapper>;
};
