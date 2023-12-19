import { useCallback } from 'react';
import { ApiStatus, IApiResult } from '../models/apiResult';
import { useModalAction } from './useModalAction';

export const useFetch = () => {
  const {
    openErrorModal,
    openPendingModal,
    closePendingModal,
    openSuccessModal,
  } = useModalAction();

  const callToApi = useCallback(
    async <T = any,>(
      api: Promise<IApiResult<T>>,
      withSuccessModal?: boolean,
    ) => {
      try {
        openPendingModal();
        const response = await api;
        closePendingModal();
        if (response.status === ApiStatus.SUCCESS && withSuccessModal) {
          console.log(response);
          openSuccessModal(response.message);
        }
        return response;
      } catch (e: any) {
        closePendingModal();
        openErrorModal(e?.message || 'An error occurred');
        return {
          status: ApiStatus.ERROR,
          message: '',
        };
      }
    },
    [],
  );

  return {
    callToApi,
  };
};
