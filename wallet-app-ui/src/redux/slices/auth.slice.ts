import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TInitialState } from '../common.types';
import { api } from '../../helpers/fetch.helper';
import { RegisterCommand } from '../../models/commands/register.command';

const initialState: TInitialState<any> = {
  data: [],
  loading: 'idle',
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (value: RegisterCommand) => {
    const command = new RegisterCommand(
      value.username,
      value.email,
      value.password,
      value.confirmPassword,
      value.icon,
    );
    const data = await api.post('/auth/register', command);

    return data;
  },
);

export default createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      console.log(state, action); // tu dodać obsługę modala (is loading)
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      console.log(state, action);
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      console.log(state, action); // dodać obsługe modala (coś poszło nie tak)
    });
  },
});
