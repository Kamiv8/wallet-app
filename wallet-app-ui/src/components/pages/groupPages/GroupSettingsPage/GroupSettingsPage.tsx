import MainTemplate from '../../../templates/MainTemplate/MainTemplate';
import Typography from '../../../atoms/Typography/Typography';
import { Avatar } from '../../../atoms/Avatar/Avatar';

const GroupSettingsPage = () => {
  return (
    <MainTemplate isGroup>
      <Typography weight={700} uppercase size={'l'}>
        settings panel
      </Typography>

      <div>
        <Avatar image={2} isGroup />
        <Typography size={'m'} color={'green'}>
          Group name
        </Typography>
      </div>
    </MainTemplate>
  );
};

export default GroupSettingsPage;
