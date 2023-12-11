import { MainTemplate } from '../../templates';
import { Typography } from '../../atoms';
import { ChangeUserIconForm } from '../../organisms';

export const ChangeUserIconPage = () => {
  return (
    <MainTemplate>
      <Typography size={'xxl'} weight={700} color={'lightBlue'}>
        Change icon
      </Typography>
      <ChangeUserIconForm />
    </MainTemplate>
  );
};
