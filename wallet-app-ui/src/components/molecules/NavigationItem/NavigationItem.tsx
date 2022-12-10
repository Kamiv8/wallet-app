import { ReactNode } from 'react';
import { IconContainer, Wrapper } from './NavigationItem.styles';

export type TProps = {
  icon: any;
  text: ReactNode;
  onClick: (open: boolean) => void;
};

const NavigationItem = (props: TProps) => {
  return (
    <Wrapper onClick={() => props.onClick(true)}>
      <IconContainer icon={props.icon} />
      {props.text}
    </Wrapper>
  );
};

export default NavigationItem;
