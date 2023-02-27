import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import Typography from '../../atoms/Typography/Typography';
import ChangeUsernameForm from '../../organisms/ChangeUsernameForm/ChangeUsernameForm';

const ChangeUsernamePage = () => {
  return (
    <MainTemplate>
      <Typography size={'xxl'} weight={700} color={'lightBlue'}>
        Change username
      </Typography>
      <ChangeUsernameForm />
    </MainTemplate>
  );
};

export default ChangeUsernamePage;
