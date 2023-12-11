import { MainTemplate } from '../../../templates';
import { Typography } from '../../../atoms';
import { ManageUsersFrom } from '../../../organisms';

export const ManageUsersPage = () => {
  return (
    <MainTemplate>
      <Typography size={'xl'} color={'green'} weight={700} uppercase>
        Manage Users
      </Typography>
      <ManageUsersFrom />
    </MainTemplate>
  );
};
