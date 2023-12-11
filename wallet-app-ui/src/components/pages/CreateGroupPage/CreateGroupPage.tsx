import { MainTemplate } from '../../templates';
import { Typography } from '../../atoms';
import { CreateGroupForm } from '../../organisms';

export const CreateGroupPage = () => {
  return (
    <MainTemplate>
      <Typography size={'xl'} color={'lightBlue'} weight={700} uppercase>
        Create group
      </Typography>
      <CreateGroupForm />
    </MainTemplate>
  );
};
