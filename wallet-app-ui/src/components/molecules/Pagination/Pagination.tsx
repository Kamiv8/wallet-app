import { StyledSVGWrapper, Wrapper } from './Pagination.styles';
import { ReactComponent as FirstPageIcon } from '../../../assets/images/pagination/FirstPage.svg';
import { ReactComponent as NextPageIcon } from '../../../assets/images/pagination/NextPage.svg';
import { ReactComponent as PreviousPageIcon } from '../../../assets/images/pagination/PreviousPage.svg';
import { ReactComponent as LastPageIcon } from '../../../assets/images/pagination/LastPage.svg';
import { PaginationItem } from '../../atoms';
import {
  displayFivePages,
  generatePageButtons,
} from '../../../helpers/pagination.helper';

export type TProps = {
  pagination: any;
};

export const Pagination = ({ pagination }: TProps) => {
  return (
    <Wrapper>
      <StyledSVGWrapper>
        <FirstPageIcon onClick={() => pagination.setPage(1)} />
      </StyledSVGWrapper>
      <StyledSVGWrapper>
        <PreviousPageIcon onClick={() => pagination.setPreviousPage()} />
      </StyledSVGWrapper>
      {displayFivePages(
        generatePageButtons(pagination.totalPages),
        pagination.currentPage,
      ).map((p) => (
        <PaginationItem
          key={p}
          index={p}
          isCurrent={pagination.currentPage}
          onClick={pagination.setPage}
        />
      ))}
      <StyledSVGWrapper>
        <NextPageIcon onClick={() => pagination.setNextPage()} />
      </StyledSVGWrapper>
      <StyledSVGWrapper>
        <LastPageIcon
          onClick={() => pagination.setPage(pagination.totalPages + 1)}
        />
      </StyledSVGWrapper>
    </Wrapper>
  );
};
