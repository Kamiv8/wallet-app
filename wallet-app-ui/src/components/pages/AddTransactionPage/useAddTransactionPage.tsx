import { useFetch, useModalAction } from '../../../hooks';
import { useCallback, useEffect, useState } from 'react';
import { DefaultTransaction } from '../../../api';
import messages from '../../../i18n/messages';
import { GetDefaultTransactionResponse } from '../../../models/apiTypes/defaultTransaction';

export const useAddTransactionPage = () => {
  const { callToApi } = useFetch();
  const { openConfirmActionModal, closeConfirmActionModal } = useModalAction();

  const initialState = {
    transactions: [] as Array<GetDefaultTransactionResponse>,
    isNew: false,
  };

  const [state, setState] = useState<typeof initialState>(initialState);

  const getSavedTransactions = async () => {
    return callToApi(DefaultTransaction.getDefaultUserTransaction());
  };

  useEffect(() => {
    (async () => {
      const savedTransactions = await getSavedTransactions();
      setState((prev) => ({
        ...prev,
        transactions: savedTransactions.data ?? [],
      }));
    })();
  }, []);

  const setNew = () => {
    setState({
      ...state,
      isNew: !state.isNew,
    });
  };

  const closeAddNewTransactionModal = async () => {
    const savedTransactions = await getSavedTransactions();
    setState((prev) => ({
      ...prev,
      isNew: false,
      transactions: savedTransactions.data ?? [],
    }));
  };

  const addTransaction = useCallback(
    async (id: string) => {
      openConfirmActionModal(
        messages.addTransactionPageConfirmModal,
        async () => {
          await callToApi(DefaultTransaction.addTransactionDefault(id));
          const savedTransactions = await getSavedTransactions();
          setState((prev) => ({
            ...prev,
            transactions: savedTransactions.data ?? [],
          }));
        },
        () => {
          closeConfirmActionModal();
        },
      );
    },
    [state],
  );

  return {
    closeAddNewTransactionModal,
    addTransaction,
    setNew,
    state,
  };
};
