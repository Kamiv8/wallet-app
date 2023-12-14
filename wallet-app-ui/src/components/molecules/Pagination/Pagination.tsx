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
  setPage: (pageIndex: number) => void;
  setPreviousPage: () => void;
  setNextPage: () => void;
  totalPages: number;
  currentPage: number;
  hasNext: boolean;
  hasPrevious: boolean;
};

export const Pagination = ({
  setPage,
  totalPages,
  setPreviousPage,
  setNextPage,
  currentPage,
}: TProps) => {
  return (
    <Wrapper>
      <StyledSVGWrapper>
        <FirstPageIcon onClick={() => setPage(1)} />
      </StyledSVGWrapper>
      <StyledSVGWrapper>
        <PreviousPageIcon onClick={() => setPreviousPage()} />
      </StyledSVGWrapper>
      {displayFivePages(generatePageButtons(totalPages), currentPage).map(
        (p) => (
          <PaginationItem
            key={p}
            index={p}
            isCurrent={currentPage - 1}
            onClick={() => setPage(p + 1)}
          />
        ),
      )}
      <StyledSVGWrapper>
        <NextPageIcon onClick={() => setNextPage()} />
      </StyledSVGWrapper>
      <StyledSVGWrapper>
        <LastPageIcon onClick={() => setPage(totalPages + 1)} />
      </StyledSVGWrapper>
    </Wrapper>
  );
};
