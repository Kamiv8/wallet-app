import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import SavedTransaction from '../../molecules/SavedTransaction/SavedTransaction';
import Typography from '../../atoms/Typography/Typography';
import { StyledButton } from '../../../styles/override/AddButton.styles';
import { useEffect, useState } from 'react';
import { Transaction } from '../../../models/resources/transaction';
import { api } from '../../../helpers/fetch.helper';
import { CurrencyMark } from '../../../models/resources/currency';
import AddTransactionForm from '../../organisms/AddTransactionForm/AddTransactionForm';

type TState = {
  transactions: Transaction[];
  isNew: boolean;
};

const AddTransactionPage = () => {
  const [state, setState] = useState<TState>({
    transactions: [],
    isNew: false,
  });

  const getSavedTransactions = async () => {
    const data = await api.get('/transaction/default');

    if (data.status === 200) {
      setState({
        ...state,
        transactions: data.data,
      });
    }
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

  return (
    <MainTemplate>
      <Typography size={'xl'} color={'lightBlue'} weight={700} uppercase>
        Add transaction
      </Typography>
      {!state.isNew &&
        state.transactions.map((item) => (
          <SavedTransaction
            key={item.id}
            title={item.title}
            category={item.category}
            price={item.price}
            textColor={item.textColor}
            backgroundColor={item.backgroundColor}
            currency={{
              id: 's',
              name: 'Polski złoty',
              mark: item.currencyMark as CurrencyMark,
            }}
            description={item.description}
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

export default AddTransactionPage;
