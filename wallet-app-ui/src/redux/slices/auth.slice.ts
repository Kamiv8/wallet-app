import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { TInitialState } from '../common.types';
import { RegisterCommand } from '../../models/commands/auth/register.command';
import { extraReducerHelper } from '../../helpers/extraReducer.helper';
import { ModalEnum } from '../../types/enums/modal.enum';
import { AuthenticateCommand } from '../../models/commands/auth/authenticate.command';
import { api } from '../../helpers/fetch.helper';
import { ResetPasswordCommand } from '../../models/commands/auth/resetPassword.command';

const initialState: TInitialState<any> = {
  data: {
    isUserLoggedIn: !!localStorage.getItem('token'),
    token: localStorage.getItem('token'),
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
    const data = await api.post('/user/register', command);

    return data;
  },
);


export const authenticate = createAsyncThunk(
  'auth/authenticate',
  async (value: any) => {
    const command = new AuthenticateCommand(value.email, value.password);
    const data = await api.post('/user/authenticate', command);
    if (data.status === 200) {
      console.log(data);
      localStorage.setItem('token', data.data.token || '');
    }
    return data;
  },
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (value: any) => {
    const command = new ResetPasswordCommand(value.email);
    const data = await api.post('/user/resetPassword', command);
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
        // localStorage.setItem('token', action.payload.data.token || '');
        state.data.isUserLoggedIn = true;
        state.data.token = action.payload.data.token;
      },
    );
    extraReducerHelper<TInitialState<any>, ResetPasswordCommand>(
      builder,
      resetPassword,
      () => {
        sessionStorage.setItem('model', String(ModalEnum.SUCCESS));
      },
    );
  },
});

export default authSlice;
