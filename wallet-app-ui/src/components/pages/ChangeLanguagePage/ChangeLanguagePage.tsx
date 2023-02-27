import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import Typography from '../../atoms/Typography/Typography';
import ChangeLanguageForm from '../../organisms/ChangeLanguageForm/ChangeLanguageForm';

const ChangeLanguagePage = () => {
  return (
    <MainTemplate>
      <Typography size={'xxl'} weight={700}>
        Change language
      </Typography>
      <ChangeLanguageForm />
    </MainTemplate>
  );
};

export default ChangeLanguagePage;
