import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import Typography from '../../atoms/Typography/Typography';
import ChangeUserPasswordForm from '../../organisms/ChangeUserPasswordForm/ChangeUserPasswordForm';

const ChangeUserPasswordPage = () => {
  return (
    <MainTemplate>
      <Typography size={'xxl'} weight={700} color={'lightBlue'}>
        Change password
      </Typography>
      <ChangeUserPasswordForm />
    </MainTemplate>
  );
};

export default ChangeUserPasswordPage;
