import { StyledLi } from './PaginationItem.styles';

export type TProps = {
  index: number;
  isCurrent: number;
  onClick: (page: number) => void;
};

export const PaginationItem = ({ index, isCurrent, onClick }: TProps) => {
  return (
    <StyledLi isCurrent={isCurrent === index} onClick={() => onClick(index)}>
      {index + 1}
    </StyledLi>
  );
};
