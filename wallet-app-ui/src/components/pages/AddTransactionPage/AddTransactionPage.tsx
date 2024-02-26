import { MainTemplate } from '../../templates';
import { SavedTransaction } from '../../molecules';
import { Typography } from '../../atoms';
import { StyledButton } from '../../../styles/override/AddButton.styles';
import { AddTransactionForm } from '../../organisms';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { useAddTransactionPage } from './useAddTransactionPage';

export const AddTransactionPage = () => {
  const { closeAddNewTransactionModal, addTransaction, setNew, state } =
    useAddTransactionPage();
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
