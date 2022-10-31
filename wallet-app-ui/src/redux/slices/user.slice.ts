import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TInitialState } from '../common.types';

type User = {
  username: string;
  email: string;
  role: string;
};

const initialState: TInitialState<User> = {
  data: {} as User,
  loading: 'idle',
};

export const getUserData = createAsyncThunk('user/get', async () => {});

export default createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserData.pending, (state, action) => {
      console.log(state, action); // tu dodać obsługę modala (is loading)
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      console.log(state, action);
    });
    builder.addCase(getUserData.rejected, (state, action) => {
      console.log(state, action); // dodać obsługe modala (coś poszło nie tak)
    });
  },
});
