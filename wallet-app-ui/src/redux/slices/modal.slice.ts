import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TInitialState } from '../common.types';
import { ModalEnum } from '../../types/enums/modal.enum';

type TData = {
  isOpen: boolean;
  type: ModalEnum | null;
  text?: string;
};

type TOpenModal = {
  type: ModalEnum;
  text?: string;
};

const initialState: TInitialState<TData> = {
  data: {
    isOpen: false,
    type: ModalEnum.LOADING,
    text: undefined,
  },
  loading: 'idle',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<TOpenModal>) => {
      sessionStorage.setItem('modal', String(action.payload.type));
      return {
        ...state,
        data: {
          ...state.data,
          isOpen: true,
          type: action.payload.type,
          text: action.payload.text,
        },
      };
    },
    closeModal: (state) => {
      sessionStorage.removeItem('modal');
      return {
        ...state,
        data: {
          ...state.data,
          isOpen: false,
        },
      };
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice;
