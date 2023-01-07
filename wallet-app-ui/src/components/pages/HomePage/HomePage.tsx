import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import Typography from '../../atoms/Typography/Typography';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import Chart from '../../atoms/Chart/Chart';
import { ChartTypeEnum } from '../../../types/enums/chartType.enum';
import TransactionItem from '../../molecules/TransactionItem/TransactionItem';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getCostChartData, getIncomeChartData, getLastTransactions, getMoneyChartData } from '../../../redux/slices/pages/homePage.slice';
import { lineChartMapper, pieChartMapper } from '../../../helpers/chartDataMapper.helper';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const {lastTransactions, moneyChart, incomeChart, costChart} = useAppSelector(store => store.homePage);
  
  // variables to test
  const allMoney = '32333USD';

  useEffect(() => {
    dispatch(getLastTransactions())
    dispatch(getMoneyChartData())
    dispatch(getIncomeChartData())
    dispatch(getCostChartData())
  },[])

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
      {lastTransactions.slice(0, 2).map((t: any) => (
        <TransactionItem data={t} />
      ))}
      <Typography size={'l'} uppercase weight={700} color={'lightBlue'}>
        <FormattedMessage {...messages.mainPageMoneyChart} />
      </Typography>
      <Chart data={lineChartMapper(moneyChart).data} options={lineChartMapper(moneyChart).options} type={ChartTypeEnum.LINE} />
      <Typography size={'l'} uppercase weight={700} color={'lightBlue'}>
        <FormattedMessage {...messages.mainPageIncomeChart} />
      </Typography>
      <Chart data={pieChartMapper(incomeChart)} type={ChartTypeEnum.PIE} />
      <Typography size={'l'} uppercase weight={700} color={'lightBlue'}>
        <FormattedMessage {...messages.mainPageCostChart} />
      </Typography>
      <Chart data={pieChartMapper(costChart)} type={ChartTypeEnum.PIE} />
    </MainTemplate>
  );
};

export default HomePage;