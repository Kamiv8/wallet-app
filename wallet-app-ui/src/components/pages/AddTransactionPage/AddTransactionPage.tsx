import { MainTemplate } from '../../templates';
import { SavedTransaction } from '../../molecules';
import { Typography } from '../../atoms';
import { StyledButton } from '../../../styles/override/AddButton.styles';
import { useCallback, useEffect, useState } from 'react';
import { AddTransactionForm } from '../../organisms';
import { DefaultTransaction, TransactionApi } from '../../../api';
import { GetDefaultTransactionResponse } from '../../../models/apiTypes/defaultTransaction/getDefaultTransaction/getDefaultTransaction.response';
import { useFetch } from '../../../hooks';

type TState = {
  transactions: Array<GetDefaultTransactionResponse>;
  isNew: boolean;
};

export const AddTransactionPage = () => {
  const { callToApi } = useFetch();

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
      await callToApi(TransactionApi.addTransactionDefault(id));
    },
    [state],
  );

  return (
    <MainTemplate>
      <Typography size={'xl'} color={'lightBlue'} weight={700} uppercase>
        Add transaction
      </Typography>
      {!state.isNew &&
        state.transactions.map((item) => (
          <SavedTransaction
            key={item.id}
            id={item.id}
            title={item.title}
            category={item.categoryName}
            price={item.price}
            textColor={item.textColor}
            backgroundColor={item.backgroundColor}
            currency={item.currencyCode}
            description={item.description}
            addTransaction={addTransaction}
          />
        ))}
      {state.isNew && (
        <AddTransactionForm onClose={closeAddNewTransactionModal} />
      )}

      {!state.isNew && (
        <StyledButton type={'button'} variant={'add'} onClick={setNew} />
      )}
    </MainTemplate>
  );
};
