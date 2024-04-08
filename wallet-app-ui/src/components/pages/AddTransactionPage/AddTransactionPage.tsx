import { MainTemplate } from '../../templates';
import { SavedTransaction } from '../../molecules';
import { StyledButton } from '../../../styles/override/AddButton.styles';
import { AddTransactionForm } from '../../organisms';
import messages from '../../../i18n/messages';
import { useAddTransactionPage } from './useAddTransactionPage';
import { AppHeaderWrapper } from '../../../styles/override/AppHeaderWrapper.styles';
import { DefaultTransactionsWrapper } from './AddTransactionPage.styles';
import { Heading } from '../../molecules/Heading/Heading';
import { HeadingEnum } from '../../../types/enums';

export const AddTransactionPage = () => {
  const { closeAddNewTransactionModal, addTransaction, setNew, state } =
    useAddTransactionPage();
  return (
    <MainTemplate>
      <AppHeaderWrapper>
        <Heading
          text={messages.addTransactionPage}
          type={HeadingEnum.SUB_APP}
        />
      </AppHeaderWrapper>
      <DefaultTransactionsWrapper>
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
      </DefaultTransactionsWrapper>
    </MainTemplate>
  );
};
