import { MainTemplate } from '../../templates';
import { Typography } from '../../atoms';
import { ChangeUserPasswordForm } from '../../organisms';

export const ChangeUserPasswordPage = () => {
  return (
    <MainTemplate>
      <Typography size={'xxl'} weight={700} color={'lightBlue'}>
        Change password
      </Typography>
      <ChangeUserPasswordForm />
    </MainTemplate>
  );
};
