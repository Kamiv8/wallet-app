import MainTemplate from '../../../templates/MainTemplate/MainTemplate';
import Typography from '../../../atoms/Typography/Typography';
import ManageUsersFrom from '../../../organisms/ManageUsersFrom/ManageUsersFrom';

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
