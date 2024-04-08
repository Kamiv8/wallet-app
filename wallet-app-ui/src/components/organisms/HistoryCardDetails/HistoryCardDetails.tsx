import {
  ChartWrapper,
  Content,
  Header,
  Wrapper,
} from './HistoryCardDetails.styles';
import { Typography, Chart } from '../../atoms';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../const';
import { ChartTypeEnum } from '../../../types/enums';
import { cutString } from '../../../utils/utils';
import { detailsPieChartMapper } from '../../../helpers';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { useRwd } from '../../../hooks';
import { StyledCloseIcon } from '../../../styles/override/CloseIcon.styles';

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
  const { getRwdValue } = useRwd();
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Header>
        <Typography size={getRwdValue('l', 'xl', 'xxl')} uppercase weight={700}>
          {cutString(title, 27)}
        </Typography>
        <StyledCloseIcon onClick={() => navigate(RoutesName.HISTORY)} />
      </Header>
      <Content>
        <Typography weight={700} size={getRwdValue('m', 'l', 'xl')}>
          <FormattedMessage {...messages.detailsTransactionPageCategory} />
        </Typography>
        <Typography weight={700} size={getRwdValue('m', 'l', 'xl')}>
          {category}
        </Typography>
      </Content>
      <Content>
        <Typography weight={700} size={getRwdValue('m', 'l', 'xl')}>
          <FormattedMessage {...messages.detailsTransactionPagePrice} />
        </Typography>
        <Typography weight={700} size={getRwdValue('m', 'l', 'xl')}>
          {price}
          {currency}
        </Typography>
      </Content>
      <Content>
        <Typography weight={700} size={getRwdValue('m', 'l', 'xl')}>
          <FormattedMessage {...messages.detailsTransactionPageDate} />
        </Typography>
        <Typography weight={700} size={getRwdValue('m', 'l', 'xl')}>
          {date.toLocaleDateString()}
        </Typography>
      </Content>
      <Content>
        <Typography weight={700} size={getRwdValue('m', 'l', 'xl')}>
          <FormattedMessage {...messages.detailsTransactionPageDescription} />
        </Typography>
        <Typography weight={700} size={getRwdValue('m', 'l', 'xl')}>
          {description}
        </Typography>
      </Content>
      <div>
        <Typography size={getRwdValue('m', 'l', 'xl')} weight={700}>
          <FormattedMessage {...messages.detailsTransactionPageChart1} />{' '}
          {category}{' '}
          <FormattedMessage {...messages.detailsTransactionPageChart2} /> :
        </Typography>
        <ChartWrapper>
          <Chart
            data={detailsPieChartMapper(toChart)}
            type={ChartTypeEnum.PIE}
            width={getRwdValue('50%', '30%', '30%', '20%')}
            height={getRwdValue('25vh', '20vh', '20vh')}
          />
        </ChartWrapper>
      </div>
    </Wrapper>
  );
};
