import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import CreateGroupForm from '../../organisms/CreateGroupFrom/CreateGroupForm';
import Typography from '../../atoms/Typography/Typography';

const CreateGroupPage = () => {
  return (
    <MainTemplate>
      <Typography size={'xl'} color={'lightBlue'} weight={700} uppercase>
        Create group
      </Typography>
      <CreateGroupForm />
    </MainTemplate>
  );
};

export default CreateGroupPage;
