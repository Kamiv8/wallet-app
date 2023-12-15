import styled from 'styled-components';

type SvgProps = {
  color: string;
};
export const WrapperIcon = styled.span`
  cursor: pointer;
  path {
    stroke: ${({ color }: SvgProps) => color};
    fill: ${({ color }: SvgProps) => color};
  }
`;
