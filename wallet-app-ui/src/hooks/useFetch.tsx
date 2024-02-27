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
    async <T = never,>(
      api: Promise<IApiResult<T>>,
      withSuccessModal?: boolean,
    ) => {
      try {
        const timeout = setTimeout(() => {
          openPendingModal();
        }, 300);
        const response = await api;
        clearTimeout(timeout);
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
