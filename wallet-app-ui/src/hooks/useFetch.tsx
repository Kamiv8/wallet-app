import { useCallback } from 'react';
import { ApiStatus, IApiResult } from '../models/apiResult';
import { useModalAction } from './useModalAction';
import { CustomString } from '../overrides/string.override';

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
          message: CustomString.Empty,
        };
      }
    },
    [],
  );

  const callToApis = useCallback(async (apis: any) => {
    try {
      const timeout = setTimeout(() => {
        openPendingModal();
      }, 300);
      const results = await Promise.all(apis);
      clearTimeout(timeout);
      closePendingModal();
      return results;
    } catch (e: any) {
      closePendingModal();
      openErrorModal(e?.message || 'An error occurred');
      return [
        {
          status: ApiStatus.ERROR,
          message: CustomString.Empty,
        },
      ];
    }
  }, []);

  return {
    callToApis,
    callToApi,
  };
};
