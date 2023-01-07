import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { extraReducerHelper } from '../../../helpers/extraReducer.helper';
import { api } from '../../../helpers/fetch.helper';
import { ToMoneyChartDto } from '../../../models/dtos/toMoneyChartDto';
import { ToPieChartDto } from '../../../models/dtos/toPieChartDto';
import { Transaction } from '../../../models/resources/transaction';

const initialState = {
  lastTransactions: [] as Array<Transaction>,
  moneyChart: [] as Array<ToMoneyChartDto>,
  incomeChart: [] as Array<ToPieChartDto>,
  costChart: [] as Array<ToPieChartDto>,
};
type TInitialState = typeof initialState;

export const getLastTransactions = createAsyncThunk(
  'homePage/lastTansactions',
  async () => {
    const data = await api.get('/transaction/default');
    return data;
  },
);

export const getMoneyChartData = createAsyncThunk(
  'homePage/moneyChart',
  async () => {
    const data = await api.get('/transaction/moneyChart');
    return data;
  },
);

export const getIncomeChartData = createAsyncThunk(
  'homePage/income',
  async () => {
    const data = await api.get('/transaction/incomeChart');
    return data;
  },
);
export const getCostChartData = createAsyncThunk('homePage/cost', async () => {
  const data = await api.get('/transaction/costChart');
  return data;
});

const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {},
  extraReducers(builder) {
    extraReducerHelper<TInitialState, any>(
      builder,
      getLastTransactions,
      (state, action) => {
        state.lastTransactions = [...action.payload.data];
      },
    );
    extraReducerHelper<TInitialState, any>(
      builder,
      getMoneyChartData,
      (state, action) => {
        state.moneyChart = [...action.payload.data];
      },
    );
    extraReducerHelper<TInitialState, any>(
      builder,
      getIncomeChartData,
      (state, action) => {
        state.incomeChart = [...action.payload.data];
      },
    );
    extraReducerHelper<TInitialState, any>(
      builder,
      getCostChartData,
      (state, action) => {
        state.costChart = [...action.payload.data];
      },
    );
  },
});

export default homePageSlice;
