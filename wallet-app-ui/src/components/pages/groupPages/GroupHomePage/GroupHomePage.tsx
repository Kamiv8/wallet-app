import MainTemplate from '../../../templates/MainTemplate/MainTemplate';
import { Avatar } from '../../../atoms/Avatar/Avatar';
import Typography from '../../../atoms/Typography/Typography';
import { useContext, useEffect, useState } from 'react';
import { GroupApi } from '../../../../api/group.api';
import { FormattedMessage } from 'react-intl';
import messages from '../../../../i18n/messages';
import { Transaction } from '../../../../models/resources/transaction';
import { TransactionApi } from '../../../../api/transaction.api';
import { getApplicationType } from '../../../../helpers/checkIsGroup.helper';
import ApplicationContext from '../../../../contexts/application.context';
import TransactionItem from '../../../molecules/TransactionItem/TransactionItem';
import { ToMoneyChartDto } from '../../../../models/dtos/toMoneyChartDto';
import { ToPieChartDto } from '../../../../models/dtos/toPieChartDto';
import Chart from '../../../atoms/Chart/Chart';
import {
  lineChartMapper,
  pieChartMapper,
} from '../../../../helpers/chartDataMapper.helper';
import { ChartTypeEnum } from '../../../../types/enums/chartType.enum';
import { GroupDataWrapper } from './GroupHomePage.styles';

interface IState {
  iconId: number;
  groupName: string;
  actualMoney: number;
  currencyMark: string;
  lastTransactions: Array<Transaction>;
  moneyChart: Array<ToMoneyChartDto>;
  incomeChart: Array<ToPieChartDto>;
  costChart: Array<ToPieChartDto>;
}

const GroupHomePage = () => {
  const appContext = useContext(ApplicationContext);
  const [state, setState] = useState<IState>({
    iconId: 1,
    groupName: '',
    actualMoney: 0,
    currencyMark: '',
    lastTransactions: [],
    moneyChart: [],
    incomeChart: [],
    costChart: [],
  });

  const getActualMoneyData = async () => {
    const { data } = await GroupApi.getActualMoney();

    setState((prev) => ({
      ...prev,
      iconId: data.iconId,
      groupName: data.groupName,
      actualMoney: data.actualMoney,
      currencyMark: data.currencyMark,
    }));
  };

  const getLastTransactions = async () => {
    const { data } = await TransactionApi.getLastTransactions(
      getApplicationType(appContext.state.type),
    );
    setState((prev) => ({
      ...prev,
      lastTransactions: data.items,
    }));
  };

  async function getMoneyChartData() {
    const moneyChartData = await TransactionApi.getMoneyChartData(
      getApplicationType(appContext.state.type),
    );
    setState((prev) => ({
      ...prev,
      moneyChart: moneyChartData.data,
    }));
  }

  async function getIncomeChartData() {
    const incomeChartData = await TransactionApi.getIncomeChartData(
      getApplicationType(appContext.state.type),
    );
    setState((prev) => ({
      ...prev,
      incomeChart: incomeChartData.data,
    }));
  }

  async function getCostChartData() {
    const costChartData = await TransactionApi.getCostChartData(
      getApplicationType(appContext.state.type),
    );
    setState((prev) => ({
      ...prev,
      costChart: costChartData.data,
    }));
  }

  useEffect(() => {
    (async () => {
      await Promise.all([
        getActualMoneyData(),
        getLastTransactions(),
        getMoneyChartData(),
        getIncomeChartData(),
        getCostChartData(),
      ]);
    })();
  }, []);

  return (
    <MainTemplate isGroup>
      <GroupDataWrapper>
        <Avatar image={state.iconId} isGroup />
        <Typography color={'lightBlue'} weight={700} size={'xl'}>
          {state.groupName}
        </Typography>
      </GroupDataWrapper>
      <div>
        <Typography size={'l'} uppercase weight={700} color={'lightBlue'}>
          <FormattedMessage {...messages.mainPageAllPrices} />
        </Typography>
        <Typography
          size={'xxl'}
          uppercase
          weight={700}
          color={'orange'}
          letterSpacing={1.6}
        >
          {state.actualMoney}
          {state.currencyMark}
        </Typography>
      </div>
      {state.lastTransactions.slice(0, 2).map((t: Transaction) => (
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

export default GroupHomePage;
