import { MainTemplate } from '../../templates';
import { SavedTransaction } from '../../molecules';
import { Typography } from '../../atoms';
import { StyledButton } from '../../../styles/override/AddButton.styles';
import { useCallback, useEffect, useState } from 'react';
import { AddTransactionForm } from '../../organisms';
import { DefaultTransaction } from '../../../api';
import { GetDefaultTransactionResponse } from '../../../models/apiTypes/defaultTransaction/getDefaultTransaction/getDefaultTransaction.response';
import { useFetch, useModalAction } from '../../../hooks';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';

type TState = {
  transactions: Array<GetDefaultTransactionResponse>;
  isNew: boolean;
};

export const AddTransactionPage = () => {
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
        'Do you want to add this transaction?',
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

  return (
    <MainTemplate>
      <Typography size={'xl'} color={'lightBlue'} weight={700} uppercase>
        <FormattedMessage {...messages.addTransactionPage} />
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
