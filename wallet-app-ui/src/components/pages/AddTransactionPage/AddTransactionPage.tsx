import { MainTemplate } from '../../templates';
import { SavedTransaction } from '../../molecules';
import { Typography } from '../../atoms';
import { StyledButton } from '../../../styles/override/AddButton.styles';
import { useCallback, useContext, useEffect, useState } from 'react';
import { Transaction } from '../../../models/resources/transaction';
import { AddTransactionForm } from '../../organisms';
import { TransactionApi } from '../../../api';
import ApplicationContext from '../../../contexts/application.context';
import { getApplicationType } from '../../../helpers/checkIsGroup.helper';

type TState = {
  transactions: Transaction[];
  isNew: boolean;
};

export const AddTransactionPage = () => {
  const appContext = useContext(ApplicationContext);
  const [state, setState] = useState<TState>({
    transactions: [],
    isNew: false,
  });

  const getSavedTransactions = async () => {
    const data = await TransactionApi.getDefaultTransactions(
      getApplicationType(appContext.state.type),
    );
    setState({
      ...state,
      transactions: data.data?.response,
    });
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
      const transaction = state.transactions.find((x) => x.id === id);

      if (!transaction) return;

      const values = {
        title: transaction.title,
        price: transaction.price,
        description: transaction.description,
        categoryId: transaction.category.id,
        currencyId: transaction.currency.id,
        isDefault: false,
        date: new Date(),
      };

      await TransactionApi.addTransaction(values);
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
            category={item.category}
            price={item.price}
            textColor={item.textColor}
            backgroundColor={item.backgroundColor}
            currency={item.currency}
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
