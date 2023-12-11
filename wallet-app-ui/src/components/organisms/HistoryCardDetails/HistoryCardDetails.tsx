import { Currency } from '../../../models/resources/currency';
import {
  ChartWrapper,
  Content,
  Header,
  Wrapper,
} from './HistoryCardDetails.styles';
import { Typography, Chart } from '../../atoms';
import { ReactComponent as CloseIcon } from '../../../assets/images/close.svg';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../const/routesName';
import { ChartTypeEnum } from '../../../types/enums/chartType.enum';
import { cutString } from '../../../utils/utils';
import { ToPieChartDto } from '../../../models/dtos/toPieChartDto';
import { pieChartMapper } from '../../../helpers/chartDataMapper.helper';
import { Category } from '../../../models/resources/category';

export type TProps = {
  title: string;
  category: Category;
  price: number;
  currency: Currency;
  date: Date;
  description?: string;
  toChart?: ToPieChartDto[];
};

export const HistoryCardDetails = (props: TProps) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header>
        <Typography size={'l'} uppercase weight={700}>
          {cutString(props.title, 27)}
        </Typography>
        <CloseIcon onClick={() => navigate(RoutesName.HISTORY)} />
      </Header>
      <Content>
        <Typography weight={700} size={'m'}>
          Category
        </Typography>
        <Typography weight={700} size={'m'}>
          {props.category.name}
        </Typography>
      </Content>
      <Content>
        <Typography weight={700} size={'m'}>
          Price
        </Typography>
        <Typography weight={700} size={'m'}>
          {props.price}
          {props.currency.mark}
        </Typography>
      </Content>
      <Content>
        <Typography weight={700} size={'m'}>
          Date
        </Typography>
        <Typography weight={700} size={'m'}>
          {props.date.toLocaleDateString()}
        </Typography>
      </Content>
      <Content>
        <Typography weight={700} size={'m'}>
          Description
        </Typography>
        <Typography weight={700} size={'m'}>
          {props.description}
        </Typography>
      </Content>
      <div>
        <Typography size={'l'} weight={700}>
          Percentage by {props.category.name} category:
        </Typography>
        <ChartWrapper>
          <Chart
            data={pieChartMapper(props.toChart as ToPieChartDto[])}
            type={ChartTypeEnum.PIE}
          />
        </ChartWrapper>
      </div>
    </Wrapper>
  );
};
