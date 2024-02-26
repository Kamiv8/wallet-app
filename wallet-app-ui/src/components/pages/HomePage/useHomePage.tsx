import { useFetch } from '../../../hooks';
import { useEffect, useState } from 'react';
import { CurrencyApi, TransactionApi, UserApi } from '../../../api';
import { LocalstorageHelper } from '../../../helpers';
import { Languages, LocalstorageEnum } from '../../../types/enums';
import { TGetCurrenciesResponse } from '../../../models/apiTypes/currency';
import {
  GetCostByCategoryResponse,
  GetIncomeByCategoryResponse,
  GetTransactionsByCurrencyResponse,
  TransactionResponse,
} from '../../../models/apiTypes/transaction';

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

export const useHomePage = () => {
  const { callToApis } = useFetch();
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
      const [actualMoney, moneyData, lastTransactions, currencies] =
        await callToApis([
          UserApi.getUserData(),
          TransactionApi.getTransactionsByCurrency(),
          TransactionApi.getLastTransactions(),
          CurrencyApi.addCurrencies(),
        ]);

      LocalstorageHelper.setItem(
        LocalstorageEnum.LANGUAGE,
        actualMoney.data?.language ?? Languages.ENGLISH,
      );

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
        moneyChart: moneyData?.data || [],
        lastTransactions: lastTransactions?.data?.transactionList || [],
        currencies: currencies?.data ?? [],
      }));
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (state.currencies.length === 0) return;
      const currencyId = state.currencies[0]?.id;
      const [incomeChartData, costChartData] = await callToApis([
        TransactionApi.getIncomeByCategory(currencyId),
        TransactionApi.getCostByCategory(currencyId),
      ]);
      setState((prev) => ({
        ...prev,
        incomeChart: incomeChartData.data || [],
        costChart: costChartData.data || [],
        activeCurrency: {
          ...prev.activeCurrency,
          incomeChart: currencyId,
          costChart: currencyId,
        },
      }));
    })();
  }, [state.currencies]);

  return {
    getIncomeChartData,
    getCostChartData,
    state,
  };
};
