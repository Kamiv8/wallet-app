import { useCallback } from 'react';
import { IApiResult } from '../models/apiResult';
import { useModalAction } from './useModalAction';

export const useFetch = () => {
  const { openErrorModal } = useModalAction();

  const callToApi = useCallback(async (api: Promise<IApiResult>) => {
    try {
      return await api;
    } catch (e: any) {
      openErrorModal(e?.message);
    }
  }, []);

  return {
    callToApi,
  };
};
