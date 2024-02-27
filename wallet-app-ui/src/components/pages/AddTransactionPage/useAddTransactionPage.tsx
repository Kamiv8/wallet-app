import { useFetch, useModalAction } from '../../../hooks';
import { useCallback, useEffect, useState } from 'react';
import { DefaultTransaction } from '../../../api';
import messages from '../../../i18n/messages';
import { GetDefaultTransactionResponse } from '../../../models/apiTypes/defaultTransaction';

type TState = {
  transactions: Array<GetDefaultTransactionResponse>;
  isNew: boolean;
};

export const useAddTransactionPage = () => {
  const { callToApi } = useFetch();
  const { openConfirmActionModal, closeConfirmActionModal } = useModalAction();

  const [state, setState] = useState<TState>({
    transactions: [],
    isNew: false,
  });

  const getSavedTransactions = async () => {
    const data = await callToApi(
      DefaultTransaction.getDefaultUserTransaction(),
    );

    setState((prev) => ({
      ...prev,
      transactions: data.data ?? [],
    }));
  };

  useEffect(() => {
    (async () => {
      await getSavedTransactions();
    })();
  }, []);

  const setNew = () => {
    setState({
      ...state,
      isNew: !state.isNew,
    });
  };

  const closeAddNewTransactionModal = () => {
    setState({
      ...state,
      isNew: false,
    });
  };

  const addTransaction = useCallback(
    async (id: string) => {
      openConfirmActionModal(
        messages.addTransactionPageConfirmModal,
        async () => {
          await callToApi(DefaultTransaction.addTransactionDefault(id));
          await getSavedTransactions();
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
