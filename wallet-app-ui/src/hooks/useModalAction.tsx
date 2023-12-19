import { useContext } from 'react';
import ApplicationContext from '../contexts/application.context';
import { ActionEnum } from '../contexts/application.reducer';
import { ModalEnum } from '../types/enums/modal.enum';

export const useModalAction = () => {
  const { dispatch } = useContext(ApplicationContext);

  const openPendingModal = () => {
    dispatch({
      type: ActionEnum.CHANGE_MODAL_STATE,
      payload: {
        type: ModalEnum.LOADING,
        isActive: true,
      },
    });
  };
  const closePendingModal = () => {
    dispatch({
      type: ActionEnum.CHANGE_MODAL_STATE,
      payload: {
        type: ModalEnum.LOADING,
        isActive: false,
      },
    });
  };
  const openRegisterModal = () => {
    dispatch({
      type: ActionEnum.CHANGE_MODAL_STATE,
      payload: {
        type: ModalEnum.REGISTER_SUCCESS,
        isActive: true,
      },
    });
  };

  const openErrorModal = (message?: string) => {
    dispatch({
      type: ActionEnum.CHANGE_MODAL_STATE,
      payload: {
        type: ModalEnum.ERROR,
        isActive: true,
        message,
      },
    });
  };
  const closeErrorModal = () => {
    dispatch({
      type: ActionEnum.CHANGE_MODAL_STATE,
      payload: {
        type: ModalEnum.ERROR,
        isActive: false,
      },
    });
  };

  const openConfirmActionModal = (
    message: string,
    yesAction: () => void,
    noAction: () => void,
  ) => {
    dispatch({
      type: ActionEnum.CHANGE_MODAL_STATE,
      payload: {
        type: ModalEnum.CONFIRM_ACTION,
        isActive: true,
        message,
        yesAction,
        noAction,
      },
    });
  };

  const closeConfirmActionModal = () => {
    dispatch({
      type: ActionEnum.CHANGE_MODAL_STATE,
      payload: {
        type: ModalEnum.CONFIRM_ACTION,
        isActive: false,
      },
    });
  };

  const closeRegisterModal = () => {
    dispatch({
      type: ActionEnum.CHANGE_MODAL_STATE,
      payload: {
        type: ModalEnum.REGISTER_SUCCESS,
        isActive: false,
      },
    });
  };
  const openSuccessModal = (message?: string) => {
    dispatch({
      type: ActionEnum.CHANGE_MODAL_STATE,
      payload: {
        type: ModalEnum.SUCCESS,
        isActive: true,
        message,
      },
    });
  };
  const closeSuccessModal = () => {
    dispatch({
      type: ActionEnum.CHANGE_MODAL_STATE,
      payload: {
        type: ModalEnum.SUCCESS,
        isActive: false,
      },
    });
  };

  return {
    openRegisterModal,
    openErrorModal,
    closeErrorModal,
    openConfirmActionModal,
    closeConfirmActionModal,
    closeRegisterModal,
    openPendingModal,
    closePendingModal,
    openSuccessModal,
    closeSuccessModal,
  };
};
