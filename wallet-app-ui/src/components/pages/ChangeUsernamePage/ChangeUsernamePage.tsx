import { MainTemplate } from '../../templates';
import { Typography } from '../../atoms';
import { ChangeUsernameForm } from '../../organisms';

export const ChangeUsernamePage = () => {
  return (
    <MainTemplate>
      <Typography size={'xxl'} weight={700} color={'lightBlue'}>
        Change username
      </Typography>
      <ChangeUsernameForm />
    </MainTemplate>
  );
};
