import { Currency } from '../../../models/resources/currency';
import {
  ChartWrapper,
  Content,
  Header,
  Wrapper,
} from './HistoryCardDetails.styles';
import Typography from '../../atoms/Typography/Typography';
import { ReactComponent as CloseIcon } from '../../../assets/images/close.svg';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../const/routesName';
import Chart from '../../atoms/Chart/Chart';
import { oilData } from '../../../mockData/pieChartData';
import { ChartTypeEnum } from '../../../types/enums/chartType.enum';
import { cutString } from '../../../utils/utils';

export type TProps = {
  title: string;
  category: string;
  price: number;
  currency: Currency;
  date: Date;
  description?: string;
};

const HistoryCardDetails = (props: TProps) => {
  console.log(props);
  //TODO get data to chart js

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
          {props.category}
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
          Percentage by {props.category} category:
        </Typography>
        <ChartWrapper>
          <Chart data={oilData} type={ChartTypeEnum.PIE} />
        </ChartWrapper>
      </div>
    </Wrapper>
  );
};

export default HistoryCardDetails;
