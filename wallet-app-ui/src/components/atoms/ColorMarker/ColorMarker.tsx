import { FC } from 'react';
import { Color, Wrapper } from './ColorMarker.styles';

type Props = {
  colors: Array<string>;
};

export const ColorMarker: FC<Props> = ({ colors }) => {
  return (
    <Wrapper>
      {colors.map((color) => (
        <Color color={color} />
      ))}
    </Wrapper>
  );
};
