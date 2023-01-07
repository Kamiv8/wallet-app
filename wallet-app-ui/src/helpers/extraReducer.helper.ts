import {
  ActionReducerMapBuilder,
  AsyncThunk,
  PayloadAction,
} from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { ModalEnum } from '../types/enums/modal.enum';

export const extraReducerHelper = <T, K>(
  builder: ActionReducerMapBuilder<T>,
  asyncThunk: AsyncThunk<AxiosResponse, K, any>,
  fulfilledFn: (state: any, action: any) => any,
) => {
  builder.addCase(asyncThunk.pending, () => {
    // sessionStorage.setItem('modal', String(ModalEnum.LOADING));
  });
  builder.addCase(asyncThunk.fulfilled, (state, action) => {
    // sessionStorage.removeItem('modal');
    fulfilledFn(state, action);
  });
  builder.addCase(
    asyncThunk.rejected,
    (state: any, action: PayloadAction<any>) => {
      sessionStorage.setItem('modal', String(ModalEnum.ERROR));
      sessionStorage.setItem('modalText', action.payload?.data?.text || '');
    },
  );
};
