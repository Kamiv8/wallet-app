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
import { ChartTypeEnum } from '../../../types/enums';
import { cutString } from '../../../utils/utils';
import { detailsPieChartMapper } from '../../../helpers';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';

export type TProps = {
  title: string;
  category: string;
  price: number;
  currency: string;
  date: Date;
  description?: string;
  toChart: {
    all: number;
    currentCategory: number;
  };
};

export const HistoryCardDetails = ({
  title,
  category,
  price,
  currency,
  description,
  date,
  toChart,
}: TProps) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Header>
        <Typography size={'l'} uppercase weight={700}>
          {cutString(title, 27)}
        </Typography>
        <CloseIcon onClick={() => navigate(RoutesName.HISTORY)} />
      </Header>
      <Content>
        <Typography weight={700} size={'m'}>
          <FormattedMessage {...messages.detailsTransactionPageCategory} />
        </Typography>
        <Typography weight={700} size={'m'}>
          {category}
        </Typography>
      </Content>
      <Content>
        <Typography weight={700} size={'m'}>
          <FormattedMessage {...messages.detailsTransactionPagePrice} />
        </Typography>
        <Typography weight={700} size={'m'}>
          {price}
          {currency}
        </Typography>
      </Content>
      <Content>
        <Typography weight={700} size={'m'}>
          <FormattedMessage {...messages.detailsTransactionPageDate} />
        </Typography>
        <Typography weight={700} size={'m'}>
          {date.toLocaleDateString()}
        </Typography>
      </Content>
      <Content>
        <Typography weight={700} size={'m'}>
          <FormattedMessage {...messages.detailsTransactionPageDescription} />
        </Typography>
        <Typography weight={700} size={'m'}>
          {description}
        </Typography>
      </Content>
      <div>
        <Typography size={'l'} weight={700}>
          <FormattedMessage {...messages.detailsTransactionPageChart1} />{' '}
          {category}{' '}
          <FormattedMessage {...messages.detailsTransactionPageChart2} /> :
        </Typography>
        <ChartWrapper>
          <Chart
            data={detailsPieChartMapper(toChart)}
            type={ChartTypeEnum.PIE}
          />
        </ChartWrapper>
      </div>
    </Wrapper>
  );
};
