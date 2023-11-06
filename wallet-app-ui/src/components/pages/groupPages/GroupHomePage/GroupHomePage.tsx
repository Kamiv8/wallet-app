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
  userIncomeChart: Array<ToPieChartDto>;
  userCostChart: Array<ToPieChartDto>;
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
    userCostChart: [],
    userIncomeChart: [],
  });

  const getActualMoneyData = async () => {
    const { data } = await GroupApi.getActualMoney();

    setState((prev) => ({
      ...prev,
      iconId: data?.response.iconId,
      groupName: data?.response.groupName,
      actualMoney: data?.response.actualMoney,
      currencyMark: data?.response.currencyMark,
    }));
  };

  const getLastTransactions = async () => {
    const { data } = await TransactionApi.getLastTransactions(
      getApplicationType(appContext.state.type),
    );
    setState((prev) => ({
      ...prev,
      lastTransactions: data?.response.items,
    }));
  };

  async function getMoneyChartData() {
    const moneyChartData = await TransactionApi.getMoneyChartData(
      getApplicationType(appContext.state.type),
    );
    setState((prev) => ({
      ...prev,
      moneyChart: moneyChartData.data?.response,
    }));
  }

  async function getIncomeChartData() {
    const incomeChartData = await TransactionApi.getIncomeChartData(
      getApplicationType(appContext.state.type),
    );
    setState((prev) => ({
      ...prev,
      incomeChart: incomeChartData.data?.response,
    }));
  }

  async function getCostChartData() {
    const costChartData = await TransactionApi.getCostChartData(
      getApplicationType(appContext.state.type),
    );
    setState((prev) => ({
      ...prev,
      costChart: costChartData.data?.response,
    }));
  }

  async function getUserIncomeChartData() {
    const incomeChartData = await TransactionApi.getUserIncomeChartData();

    setState((prev) => ({
      ...prev,
      userIncomeChart: incomeChartData.data?.response,
    }));
  }

  async function getUserCostChartData() {
    const costUserChartData = await TransactionApi.getUserCostChartData();
    setState((prev) => ({
      ...prev,
      userCostChart: costUserChartData.data?.response,
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
        getUserIncomeChartData(),
        getUserCostChartData(),
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

      {state.moneyChart.length && (
        <>
          <Typography size={'l'} uppercase weight={700} color={'lightBlue'}>
            <FormattedMessage {...messages.mainPageMoneyChart} />
          </Typography>
          <Chart
            data={lineChartMapper(state.moneyChart).data}
            options={lineChartMapper(state.moneyChart).options}
            type={ChartTypeEnum.LINE}
          />
        </>
      )}

      {state.incomeChart.length && (
        <>
          <Typography size={'l'} uppercase weight={700} color={'lightBlue'}>
            <FormattedMessage {...messages.mainPageIncomeChart} />
          </Typography>
          <Chart
            data={pieChartMapper(state.incomeChart)}
            type={ChartTypeEnum.PIE}
          />
        </>
      )}

      {state.costChart.length && (
        <>
          <Typography size={'l'} uppercase weight={700} color={'lightBlue'}>
            <FormattedMessage {...messages.mainPageCostChart} />
          </Typography>
          <Chart
            data={pieChartMapper(state.costChart)}
            type={ChartTypeEnum.PIE}
          />
        </>
      )}

      {state.userIncomeChart.length && (
        <>
          <Typography size={'l'} uppercase weight={700} color={'lightBlue'}>
            <FormattedMessage {...messages.groupMainPageUserIncomeChart} />
          </Typography>
          <Chart
            data={pieChartMapper(state.userIncomeChart)}
            type={ChartTypeEnum.PIE}
          />
        </>
      )}

      {state.userCostChart.length && (
        <>
          <Typography size={'l'} uppercase weight={700} color={'lightBlue'}>
            <FormattedMessage {...messages.groupMainPageUserCostChart} />
          </Typography>
          <Chart
            data={pieChartMapper(state.userCostChart)}
            type={ChartTypeEnum.PIE}
          />
        </>
      )}
    </MainTemplate>
  );
};

export default GroupHomePage;
