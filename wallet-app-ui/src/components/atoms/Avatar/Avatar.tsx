import { ReactNode } from 'react';

export type TProps = {
  selected: boolean;
  children: ReactNode;
  onClick: (e: any) => void;
  image: string;
};

const Avatar = (props: TProps) => {
  return <div>{props.children}</div>;
};

export default Avatar;
