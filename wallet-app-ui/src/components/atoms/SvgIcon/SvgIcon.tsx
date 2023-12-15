import { FunctionComponent, SVGProps } from 'react';
import { WrapperIcon } from './SvgIcon.styles';

type TProps = {
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  color: string;
  onClick?: () => void;
};

export const SvgIcon = ({ Icon, color, onClick }: TProps) => {
  return (
    <WrapperIcon color={color}>
      <Icon onClick={onClick} />
    </WrapperIcon>
  );
};
