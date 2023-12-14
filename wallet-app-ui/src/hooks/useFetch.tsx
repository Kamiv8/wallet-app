import { useCallback } from 'react';
import { ApiStatus, IApiResult } from '../models/apiResult';
import { useModalAction } from './useModalAction';

export const useFetch = () => {
  const { openErrorModal, openPendingModal, closePendingModal } =
    useModalAction();

  const callToApi = useCallback(
    async <T = any,>(api: Promise<IApiResult<T>>) => {
      try {
        openPendingModal();
        return await api;
      } catch (e: any) {
        openErrorModal(e?.message);
        return {
          status: ApiStatus.ERROR,
          message: '',
        };
      } finally {
        closePendingModal();
      }
    },
    [],
  );

  return {
    callToApi,
  };
};
