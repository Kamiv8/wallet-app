import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import Typography from '../../atoms/Typography/Typography';
import ChangeCurrencyForm from '../../organisms/ChangeCurrencyForm/ChangeCurrencyForm';

const ChangeCurrencyPage = () => {
  return (
    <MainTemplate>
      <Typography size={'xxl'} weight={700} color={'lightBlue'}>
        Change Currency
      </Typography>
      <ChangeCurrencyForm />
    </MainTemplate>
  );
};

export default ChangeCurrencyPage;
