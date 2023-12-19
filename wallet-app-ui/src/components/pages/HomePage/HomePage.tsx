import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { ChartTypeEnum } from '../../../types/enums/chartType.enum';
import { useEffect, useState } from 'react';
import {
  costPieChartMapper,
  incomePieChartMapper,
  lineChartMapper,
} from '../../../helpers/chartDataMapper.helper';
import { CurrencyApi, TransactionApi, UserApi } from '../../../api';
import { MainTemplate } from '../../templates';
import { Chart, Typography } from '../../atoms';
import { TransactionItem } from '../../molecules';
import { TGetCurrenciesResponse } from '../../../models/apiTypes/currency/getCurrencies/getCurrencies.response';
import { GetIncomeByCategoryResponse } from '../../../models/apiTypes/transaction/getIcomeByCategory/getIncomeByCategory.response';
import { CurrenciesButton } from '../../molecules/CurrenciesButton/CurrenciesButton';
import { GetCostByCategoryResponse } from '../../../models/apiTypes/transaction/getCostByCategory/getCostByCategory.response';
import { TransactionResponse } from '../../../models/apiTypes/transaction/getUserTransactionList/transaction.response';
import { useModalAction } from '../../../hooks';
import { GetTransactionsByCurrencyResponse } from '../../../models/apiTypes/transaction/GetTransactionsByCurrency/GetTransactionsByCurrency.response';

interface IState {
  currencies: Array<TGetCurrenciesResponse>;
  lastTransactions: Array<TransactionResponse>;
  moneyChart: Array<Array<GetTransactionsByCurrencyResponse>>;
  incomeChart: Array<GetIncomeByCategoryResponse>;
  costChart: Array<GetCostByCategoryResponse>;
  actualMoney: {
    actualMoneyPln?: number;
    actualMoneyUsd?: number;
    actualMoneyChf?: number;
    actualMoneyGbp?: number;
    actualMoneyEur?: number;
  };
  activeCurrency: {
    incomeChart: string;
    costChart: string;
  };
}

export const HomePage = () => {
  const { openPendingModal, closePendingModal } = useModalAction();
  const [state, setState] = useState<IState>({
    currencies: [],
    lastTransactions: [],
    moneyChart: [],
    incomeChart: [],
    costChart: [],
    actualMoney: {
      actualMoneyPln: 0,
      actualMoneyUsd: 0,
      actualMoneyChf: 0,
      actualMoneyGbp: 0,
      actualMoneyEur: 0,
    },
    activeCurrency: {
      incomeChart: '',
      costChart: '',
    },
  });

  async function getActualMoney() {
    const actualMoney = await UserApi.getUserData();
    setState((prev) => ({
      ...prev,
      actualMoney: {
        ...prev.actualMoney,
        actualMoneyPln: actualMoney.data?.actualMoneyPln,
        actualMoneyUsd: actualMoney.data?.actualMoneyUsd,
        actualMoneyChf: actualMoney.data?.actualMoneyChf,
        actualMoneyGbp: actualMoney.data?.actualMoneyGbp,
        actualMoneyEur: actualMoney.data?.actualMoneyEur,
      },
    }));
  }

  // TODO refactor return no void

  async function getMoneyChartData() {
    const moneyData = await TransactionApi.getTransactionsByCurrency();
    setState((prevState) => ({
      ...prevState,

      moneyChart: moneyData.data || [],
    }));
  }

  async function getCurrencies() {
    const currencies = await CurrencyApi.addCurrencies();
    setState((prev) => ({
      ...prev,
      currencies: currencies.data ?? [],
    }));
  }

  async function getLastTransactions() {
    const lastTransactions = await TransactionApi.getLastTransactions();
    setState((prev) => ({
      ...prev,
      lastTransactions: lastTransactions.data?.transactionList || [],
    }));
  }

  async function getIncomeChartData(currencyId: string) {
    const incomeChartData = await TransactionApi.getIncomeByCategory(
      currencyId,
    );
    setState((prev) => ({
      ...prev,
      incomeChart: incomeChartData.data || [],
      activeCurrency: {
        ...prev.activeCurrency,
        incomeChart: currencyId,
      },
    }));
  }

  async function getCostChartData(currencyId: string) {
    const costChartData = await TransactionApi.getCostByCategory(currencyId);
    setState((prev) => ({
      ...prev,
      costChart: costChartData.data || [],
      activeCurrency: {
        ...prev.activeCurrency,
        costChart: currencyId,
      },
    }));
  }

  useEffect(() => {
    (async () => {
      openPendingModal();
      await Promise.all([
        getActualMoney(),
        getMoneyChartData(),
        getLastTransactions(),
        getCurrencies(),
      ]);
      closePendingModal();
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (state.currencies.length === 0) return;
      await Promise.all([
        getIncomeChartData(state.currencies[0]?.id),
        getCostChartData(state.currencies[0]?.id),
      ]);
    })();
  }, [state.currencies]);

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
      {state.actualMoney.actualMoneyPln ? (
        <Typography
          size={'xxl'}
          uppercase
          weight={700}
          color={'orange'}
          letterSpacing={1.6}
        >
          {state.actualMoney.actualMoneyPln} PLN
        </Typography>
      ) : null}
      {state.actualMoney.actualMoneyEur ? (
        <Typography
          size={'xxl'}
          uppercase
          weight={700}
          color={'orange'}
          letterSpacing={1.6}
        >
          {state.actualMoney.actualMoneyEur} EUR
        </Typography>
      ) : null}
      {state.actualMoney.actualMoneyChf ? (
        <Typography
          size={'xxl'}
          uppercase
          weight={700}
          color={'orange'}
          letterSpacing={1.6}
        >
          {state.actualMoney.actualMoneyChf} CHF
        </Typography>
      ) : null}
      {state.actualMoney.actualMoneyUsd ? (
        <Typography
          size={'xxl'}
          uppercase
          weight={700}
          color={'orange'}
          letterSpacing={1.6}
        >
          {state.actualMoney.actualMoneyUsd} USD
        </Typography>
      ) : null}
      {state.actualMoney.actualMoneyGbp ? (
        <Typography
          size={'xxl'}
          uppercase
          weight={700}
          color={'orange'}
          letterSpacing={1.6}
        >
          {state.actualMoney.actualMoneyGbp} GBP
        </Typography>
      ) : null}
      <Typography size={'l'} uppercase weight={700} color={'lightBlue'}>
        <FormattedMessage {...messages.mainPageLastTransactions} />
      </Typography>
      {state.lastTransactions.map((t: TransactionResponse) => (
        <TransactionItem key={t.id} data={t} />
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
      <Typography size={'l'} uppercase weight={700} color={'lightBlue'}>
        <FormattedMessage {...messages.mainPageIncomeChart} />
      </Typography>
      <CurrenciesButton
        onClick={getIncomeChartData}
        currencies={state.currencies}
        isActive={state.activeCurrency.incomeChart}
      />
      {state.incomeChart.length ? (
        <Chart
          data={incomePieChartMapper(state.incomeChart)}
          type={ChartTypeEnum.PIE}
        />
      ) : (
        <Typography color={'orange'} size={'l'}>
          No data
        </Typography>
      )}
      <Typography size={'l'} uppercase weight={700} color={'lightBlue'}>
        <FormattedMessage {...messages.mainPageCostChart} />
      </Typography>
      <CurrenciesButton
        onClick={getCostChartData}
        currencies={state.currencies}
        isActive={state.activeCurrency.costChart}
      />
      {state.costChart.length ? (
        <Chart
          data={costPieChartMapper(state.costChart)}
          type={ChartTypeEnum.PIE}
        />
      ) : (
        <Typography color={'orange'} size={'l'}>
          No data
        </Typography>
      )}
    </MainTemplate>
  );
};
