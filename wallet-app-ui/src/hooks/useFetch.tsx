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
    async <T = null,>(
      api: Promise<IApiResult<T>>,
      withSuccessModal?: boolean,
    ) => {
      try {
        openPendingModal();
        const response = await api;
        closePendingModal();
        if (response.status === ApiStatus.SUCCESS && withSuccessModal) {
          openSuccessModal(response.message);
        }
        return response;
      } catch (e: any) {
        closePendingModal();
        openErrorModal(e?.response.data?.message || 'An error occurred');
        return {
          status: ApiStatus.ERROR,
          message: '',
        };
      }
    },
    [],
  );

  const callToApis = useCallback(async (apis: any) => {
    try {
      openPendingModal();
      const results = await Promise.all(apis);
      closePendingModal();
      return results;
    } catch (e: any) {
      closePendingModal();
      openErrorModal(e?.message || 'An error occurred');
      return [
        {
          status: ApiStatus.ERROR,
          message: '',
        },
      ];
    }
  }, []);

  return {
    callToApis,
    callToApi,
  };
};
