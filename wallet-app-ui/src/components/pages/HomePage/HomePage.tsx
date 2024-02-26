import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { MainTemplate } from '../../templates';
import { Chart, Typography } from '../../atoms';
import { TransactionItem } from '../../molecules';
import { CurrenciesButton } from '../../molecules/CurrenciesButton/CurrenciesButton';
import { NoDataTypography } from './HomePage.styles';
import { useHomePage } from './useHomePage';
import { TransactionResponse } from '../../../models/apiTypes/transaction';
import {
  costPieChartMapper,
  incomePieChartMapper,
  lineChartMapper,
} from '../../../helpers';
import { ChartTypeEnum } from '../../../types/enums';

export const HomePage = () => {
  const { getIncomeChartData, getCostChartData, state } = useHomePage();
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
        <NoDataTypography color={'orange'} uppercase weight={700} size={'l'}>
          <FormattedMessage {...messages.mainPageNoData} />
        </NoDataTypography>
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
        <NoDataTypography color={'orange'} uppercase weight={700} size={'l'}>
          <FormattedMessage {...messages.mainPageNoData} />
        </NoDataTypography>
      )}
    </MainTemplate>
  );
};
