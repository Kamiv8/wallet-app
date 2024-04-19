import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { MainTemplate } from '../../templates';
import { Chart, Typography } from '../../atoms';
import { TransactionItem } from '../../molecules';
import { CurrenciesButton } from '../../molecules/CurrenciesButton/CurrenciesButton';
import {
  AllPricesSection,
  FirstSection,
  LastTransactionSection,
  MoneyChartSection,
  NoDataTypography,
  PieChartSection,
  SecondSection,
} from './HomePage.styles';
import { useHomePage } from './useHomePage';
import { TransactionResponse } from '../../../models/apiTypes/transaction';
import {
  costPieChartMapper,
  incomePieChartMapper,
  lineChartMapper,
} from '../../../helpers';
import { ChartTypeEnum, HeadingEnum } from '../../../types/enums';
import { Heading } from '../../molecules/Heading/Heading';
import { useRwd } from '../../../hooks';

export const HomePage = () => {
  const { getIncomeChartData, getCostChartData, state } = useHomePage();
  const { getRwdValue } = useRwd();
  return (
    <MainTemplate>
      <FirstSection>
        <Heading text={messages.mainPageAllPrices} type={HeadingEnum.SUB_APP} />
        <AllPricesSection>
          {state.actualMoney.actualMoneyPln ? (
            <Typography
              size={'xl'}
              uppercase
              weight={700}
              color={'orange'}
              letterSpacing={1.6}
            >
              {state.actualMoney.actualMoneyPln.toFixed(2)} PLN
            </Typography>
          ) : null}
          {state.actualMoney.actualMoneyEur ? (
            <Typography
              size={'xl'}
              uppercase
              weight={700}
              color={'orange'}
              letterSpacing={1.6}
            >
              {state.actualMoney.actualMoneyEur.toFixed(2)} EUR
            </Typography>
          ) : null}
          {state.actualMoney.actualMoneyChf ? (
            <Typography
              size={'xl'}
              uppercase
              weight={700}
              color={'orange'}
              letterSpacing={1.6}
            >
              {state.actualMoney.actualMoneyChf.toFixed(2)} CHF
            </Typography>
          ) : null}
          {state.actualMoney.actualMoneyUsd ? (
            <Typography
              size={'xl'}
              uppercase
              weight={700}
              color={'orange'}
              letterSpacing={1.6}
            >
              {state.actualMoney.actualMoneyUsd.toFixed(2)} USD
            </Typography>
          ) : null}
          {state.actualMoney.actualMoneyGbp ? (
            <Typography
              size={'xl'}
              uppercase
              weight={700}
              color={'orange'}
              letterSpacing={1.6}
            >
              {state.actualMoney.actualMoneyGbp.toFixed(2)} GBP
            </Typography>
          ) : null}
        </AllPricesSection>
        <LastTransactionSection>
          <Typography size={'l'} uppercase weight={700} color={'lightBlue'}>
            <FormattedMessage {...messages.mainPageLastTransactions} />
          </Typography>
          {state.lastTransactions.map((t: TransactionResponse) => (
            <TransactionItem key={t.id} data={t} />
          ))}
        </LastTransactionSection>
        <MoneyChartSection>
          {state.moneyChart.length && (
            <>
              <Typography size={'l'} uppercase weight={700} color={'lightBlue'}>
                <FormattedMessage {...messages.mainPageMoneyChart} />
              </Typography>
              <Chart
                data={lineChartMapper(state.moneyChart).data}
                options={lineChartMapper(state.moneyChart).options}
                type={ChartTypeEnum.LINE}
                width={getRwdValue('100%', '100%', '90%')}
                height={getRwdValue('40vh', '40vh', '30vh', '40vh')}
              />
            </>
          )}
        </MoneyChartSection>
      </FirstSection>
      <SecondSection>
        <PieChartSection>
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
              options={incomePieChartMapper(state.incomeChart).options}
              type={ChartTypeEnum.PIE}
              width={getRwdValue('100%', '100%', '80%')}
              height={getRwdValue('35vh', '35vh', '33vh')}
            />
          ) : (
            <NoDataTypography
              color={'orange'}
              uppercase
              weight={700}
              size={'l'}
            >
              <FormattedMessage {...messages.mainPageNoData} />
            </NoDataTypography>
          )}
        </PieChartSection>
        <PieChartSection>
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
              options={costPieChartMapper(state.costChart).options}
              type={ChartTypeEnum.PIE}
              width={getRwdValue('100%', '100%', '80%')}
              height={getRwdValue('35vh', '35vh', '33vh')}
            />
          ) : (
            <NoDataTypography
              color={'orange'}
              uppercase
              weight={700}
              size={'l'}
            >
              <FormattedMessage {...messages.mainPageNoData} />
            </NoDataTypography>
          )}
        </PieChartSection>
      </SecondSection>
    </MainTemplate>
  );
};
