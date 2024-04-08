import { Wrapper } from './GridTemplate.styles';
import { ReactNode } from 'react';

type TProps = {
  children: ReactNode | ReactNode[];
  columns?: number;
};

export const GridTemplate = (props: TProps) => {
  return <Wrapper columns={props.columns ?? 2}>{props.children}</Wrapper>;
};
