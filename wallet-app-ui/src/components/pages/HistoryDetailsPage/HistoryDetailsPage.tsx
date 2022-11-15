import Typography from '../../atoms/Typography/Typography';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import HistoryCardDetails from '../../organisms/HistoryCardDetails/HistoryCardDetails';

const HistoryDetailsPage = () => {
  return (
    <MainTemplate>
      <Typography size={'l'} weight={700} color={'lightBlue'} uppercase>
        Transaction details
      </Typography>
      <HistoryCardDetails
        title={'Lorem ipsum'}
        category={'Ticket'}
        price={323}
        currency={{ id: '2', name: 'Polski złoty', mark: 'PLN' }}
        date={new Date()}
      />
    </MainTemplate>
  );
};

export default HistoryDetailsPage;
