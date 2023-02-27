import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import Typography from '../../atoms/Typography/Typography';
import ChangeUserIconForm from '../../organisms/ChangeUserIconFrom/ChangeUserIconForm';

const ChangeUserIconPage = () => {
  return (
    <MainTemplate>
      <Typography size={'xxl'} weight={700} color={'lightBlue'}>
        Change icon
      </Typography>
      <ChangeUserIconForm />
    </MainTemplate>
  );
};

export default ChangeUserIconPage;
