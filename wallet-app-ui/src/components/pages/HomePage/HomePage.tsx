import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import Typography from '../../atoms/Typography/Typography';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import Chart from '../../atoms/Chart/Chart';
import { data } from '../../../mockData/lineChartData';
import { ChartTypeEnum } from '../../../types/enums/chartType.enum';
import { oilData } from '../../../mockData/pieChartData';

const HomePage = () => {
  // variables to test
  const allMoney = '32333USD';

  return (
    <MainTemplate>
      <Typography
        size={'l'}
        uppercase
        weight={700}
        color={'lightBlue'}
        letterSpacing={1.2}
      >
        <FormattedMessage {...messages.mainPageAllPrices} />
      </Typography>
      <Typography
        size={'xxl'}
        uppercase
        weight={700}
        color={'orange'}
        letterSpacing={1.6}
      >
        {allMoney}
      </Typography>

      <Typography size={'l'} uppercase weight={700} color={'lightBlue'}>
        <FormattedMessage {...messages.mainPageLastTransactions} />
      </Typography>
      <Typography size={'l'} uppercase weight={700} color={'lightBlue'}>
        <FormattedMessage {...messages.mainPageMoneyChart} />
      </Typography>
      <Chart data={data} type={ChartTypeEnum.LINE} />
      <Typography size={'l'} uppercase weight={700} color={'lightBlue'}>
        <FormattedMessage {...messages.mainPageIncomeChart} />
      </Typography>
      <Chart data={oilData} type={ChartTypeEnum.PIE} />
      <Typography size={'l'} uppercase weight={700} color={'lightBlue'}>
        <FormattedMessage {...messages.mainPageCostChart} />
      </Typography>
      <Chart data={oilData} type={ChartTypeEnum.PIE} />
    </MainTemplate>
  );
};

export default HomePage;
