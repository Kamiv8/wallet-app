import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { extraReducerHelper } from '../../../helpers/extraReducer.helper';
import { api } from '../../../helpers/fetch.helper';
import { TransactionDetails } from '../../../models/resources/TransactionDetails';

const initialState = {
  transaction: {} as TransactionDetails,
};

export const getDetailsData = createAsyncThunk(
  'hisotryDetailsPage/details',
  async (id: string) => {
    const data = await api.get('/transaction/' + id);
    return data;
  },
);

const historyDetailsSlice = createSlice({
  name: 'historyDetailsPage',
  initialState,
  reducers: {},
  extraReducers(builder) {
    extraReducerHelper(builder, getDetailsData, (state, action) => {
      state.transaction.title = action.payload.data.title;
      state.transaction.date = action.payload.data.date;
      state.transaction.currencyMark = action.payload.data.currencyMark;
      state.transaction.category = action.payload.data.category;
      state.transaction.description = action.payload.data.description;
      state.transaction.price = action.payload.data.price;
      state.transaction.percentage = action.payload.data.percentage.byCategory;
    });
  },
});

export default historyDetailsSlice;
