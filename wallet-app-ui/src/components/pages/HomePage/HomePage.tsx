import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import Typography from '../../atoms/Typography/Typography';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import Chart from '../../atoms/Chart/Chart';
import { ChartTypeEnum } from '../../../types/enums/chartType.enum';
import TransactionItem from '../../molecules/TransactionItem/TransactionItem';
import { useEffect, useState } from 'react';
import {
  lineChartMapper,
  pieChartMapper,
} from '../../../helpers/chartDataMapper.helper';
import { TransactionApi } from '../../../api/transaction.api';
import { Transaction } from '../../../models/resources/transaction';
import { ToMoneyChartDto } from '../../../models/dtos/toMoneyChartDto';
import { ToPieChartDto } from '../../../models/dtos/toPieChartDto';

interface IState {
  lastTransactions: Array<Transaction>;
  moneyChart: Array<ToMoneyChartDto>;
  incomeChart: Array<ToPieChartDto>;
  costChart: Array<ToPieChartDto>;
}

const HomePage = () => {
  const [state, setState] = useState<IState>({
    lastTransactions: [],
    moneyChart: [],
    incomeChart: [],
    costChart: [],
  });

  // variables to test
  const allMoney = '32333USD';

  async function getLastTransactions() {
    const lastTransactions = await TransactionApi.getLastTransactions();
    setState((prev) => ({
      ...prev,
      lastTransactions: lastTransactions.data,
    }));
  }

  async function getMoneyChartData() {
    const moneyChartData = await TransactionApi.getMoneyChartData();

    setState((prev) => ({
      ...prev,
      moneyChart: moneyChartData.data,
    }));
  }

  async function getIncomeChartData() {
    const incomeChartData = await TransactionApi.getIncomeChartData();
    setState((prev) => ({
      ...prev,
      incomeChart: incomeChartData.data,
    }));
  }

  async function getCostChartData() {
    const costChartData = await TransactionApi.getCostChartData();
    setState((prev) => ({
      ...prev,
      costChart: costChartData.data,
    }));
  }

  useEffect(() => {
    (async () => {
      if (localStorage.getItem('token')) {
        await Promise.all([
          getLastTransactions(),
          getMoneyChartData(),
          getIncomeChartData(),
          getCostChartData(),
        ]);
      }
    })();
  }, [localStorage.getItem('token')]);

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
      {state.lastTransactions.slice(0, 2).map((t: any) => (
        <TransactionItem data={t} />
      ))}
      <Typography size={'l'} uppercase weight={700} color={'lightBlue'}>
        <FormattedMessage {...messages.mainPageMoneyChart} />
      </Typography>
      <Chart
        data={lineChartMapper(state.moneyChart).data}
        options={lineChartMapper(state.moneyChart).options}
        type={ChartTypeEnum.LINE}
      />
      <Typography size={'l'} uppercase weight={700} color={'lightBlue'}>
        <FormattedMessage {...messages.mainPageIncomeChart} />
      </Typography>
      <Chart
        data={pieChartMapper(state.incomeChart)}
        type={ChartTypeEnum.PIE}
      />
      <Typography size={'l'} uppercase weight={700} color={'lightBlue'}>
        <FormattedMessage {...messages.mainPageCostChart} />
      </Typography>
      <Chart data={pieChartMapper(state.costChart)} type={ChartTypeEnum.PIE} />
    </MainTemplate>
  );
};

export default HomePage;
