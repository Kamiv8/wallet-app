import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TInitialState } from '../common.types';
import { RegisterCommand } from '../../models/commands/auth/register.command';
import { extraReducerHelper } from '../../helpers/extraReducer.helper';
import axios from 'axios';
import { ModalEnum } from '../../types/enums/modal.enum';
import { VerifyAccountCommand } from '../../models/commands/auth/verifyAccount.command';
import { AuthenticateCommand } from '../../models/commands/auth/authenticate.command';
import { api } from '../../helpers/fetch.helper';

const initialState: TInitialState<any> = {
  data: {
    isUserLoggedIn: false,
  },
  loading: 'idle',
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (value: any) => {
    const command = new RegisterCommand(
      value.username,
      value.email,
      value.password,
      value.confirmPassword,
      value.icon,
    );
    const data = await axios.post(
      'https://localhost:7037/api/user/register',
      command,
    );

    return data;
  },
);

export const verifyAccount = createAsyncThunk(
  'auth/verify',
  async (value: any) => {
    const command = new VerifyAccountCommand(value.token);

    const data = await axios.post(
      `https://localhost:7037/api/User/verify-email/${command.token}`,
      {},
    );

    return data;
  },
);

export const authenticate = createAsyncThunk(
  'auth/authenticate',
  async (value: any) => {
    const command = new AuthenticateCommand(value.email, value.password);

    const data = await api.post('/user/authenticate', command);
    return data;
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    extraReducerHelper<TInitialState<any>, RegisterCommand>(
      builder,
      registerUser,
      () => {
        sessionStorage.setItem('modal', String(ModalEnum.REGISTER_SUCCESS));
      },
    );
    extraReducerHelper<TInitialState<any>, AuthenticateCommand>(
      builder,
      authenticate,
      (state, action) => {
        localStorage.setItem('token', action.payload.data);
        state.data.isUserLoggedIn = true;
      },
    );
  },
});

export default authSlice;
