import { Wrapper } from './GridTemplate.styles';
import { ReactNode } from 'react';

type TProps = {
  children: ReactNode | ReactNode[];
};

const GridTemplate = (props: TProps) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default GridTemplate;
