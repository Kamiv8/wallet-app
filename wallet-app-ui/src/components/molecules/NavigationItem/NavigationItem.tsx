import { ReactNode } from 'react';
import { IconContainer, Wrapper } from './NavigationItem.styles';

export type TProps = {
  icon: any;
  text: ReactNode;
};

const NavigationItem = (props: TProps) => {
  return (
    <Wrapper>
      <IconContainer icon={props.icon} />
      {props.text}
    </Wrapper>
  );
};

export default NavigationItem;
