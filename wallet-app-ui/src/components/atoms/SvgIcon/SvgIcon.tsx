import { FunctionComponent, SVGProps } from 'react';
import { WrapperIcon } from './SvgIcon.styles';
import { TColor } from '../../../types/types';

type TProps = {
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  color: string | TColor;
  onClick?: () => void;
  withStroke?: boolean;
};

export const SvgIcon = ({ Icon, color, onClick, withStroke }: TProps) => {
  return (
    <WrapperIcon withStroke={withStroke} color={color}>
      <Icon onClick={onClick} />
    </WrapperIcon>
  );
};
