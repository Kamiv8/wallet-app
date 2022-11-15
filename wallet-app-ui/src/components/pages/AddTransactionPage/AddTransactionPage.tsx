import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import SavedTransaction from '../../molecules/SavedTransaction/SavedTransaction';
import Typography from '../../atoms/Typography/Typography';
import { StyledButton } from '../../../styles/override/AddButton.styles';

const AddTransactionPage = () => {
  return (
    <MainTemplate>
      <Typography size={'xl'} color={'lightBlue'} weight={700} uppercase>
        Add transaction
      </Typography>
      <SavedTransaction
        category={'Ticket'}
        price={212}
        currency={{ id: 's', name: 'Polski złoty', mark: 'PLN' }}
        description={'Lorem ipsum dolor sit'}
      />
      <StyledButton type={'button'} variant={'add'} onClick={() => {}} />
    </MainTemplate>
  );
};

export default AddTransactionPage;
