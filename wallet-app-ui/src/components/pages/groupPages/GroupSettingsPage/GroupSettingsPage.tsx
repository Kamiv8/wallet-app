import MainTemplate from '../../../templates/MainTemplate/MainTemplate';
import Typography from '../../../atoms/Typography/Typography';
import { Avatar } from '../../../atoms/Avatar/Avatar';
import Button from '../../../atoms/Button/Button';
import { FormattedMessage } from 'react-intl';
import { ReactComponent as ChangeUserIcon } from '../../../../assets/images/EditUser.svg';

import messages from '../../../../i18n/messages';
import {
  AdminSection,
  DeleteSection,
  NameWrapper,
} from './GroupSettingsPage.styles';
import { useEffect, useState } from 'react';
import { GroupApi } from '../../../../api/group.api';
import SettingsTemplate from '../../../templates/SettingsTemplate/SettingsTemplate';
import NavigationBox from '../../../molecules/NavigationBox/NavigationBox';
import { GroupRoutesName, RoutesName } from '../../../../const/routesName';

const GroupSettingsPage = () => {
  const [state, setState] = useState({
    id: '',
    iconId: 1,
    groupName: '',
    admins: [] as string[],
    maxMembers: 0,
    membersCount: 0,
  });

  useEffect(() => {
    (async () => {
      const groupData = await GroupApi.getGroupData();

      setState({
        ...state,
        id: groupData.data?.response.id,
        iconId: groupData.data?.response.iconId,
        groupName: groupData.data?.response.groupName,
        admins: groupData.data?.response.admins,
        membersCount: groupData.data?.response.membersCount,
        maxMembers: groupData.data?.response.maxMembers,
      });
    })();
  }, []);

  const deleteGroup = async () => {
    await GroupApi.deleteGroup();
  };

  return (
    <MainTemplate isGroup>
      <Typography color={'lightBlue'} weight={700} uppercase size={'l'}>
        settings panel
      </Typography>

      <NameWrapper>
        <Avatar image={2} isGroup />
        <Typography weight={700} size={'l'} color={'green'} uppercase>
          {state.groupName}
        </Typography>
      </NameWrapper>
      <AdminSection>
        <Typography weight={700} size={'m'} color={'green'}>
          Admins:
        </Typography>
        <Typography weight={700} size={'m'} color={'orange'}>
          {state.admins.map((x) => (
            <span>{x}</span>
          ))}
        </Typography>
      </AdminSection>
      <AdminSection>
        <Typography weight={700} size={'m'} color={'green'}>
          Members:
        </Typography>
        <Typography weight={700} size={'m'} color={'orange'}>
          {state.membersCount} / {state.maxMembers}
        </Typography>
      </AdminSection>

      <SettingsTemplate>
        <NavigationBox
          Image={ChangeUserIcon}
          name={'Change Currencies'}
          routeName={RoutesName.CHANGE_CURRENCIES}
        />
        <NavigationBox
          Image={ChangeUserIcon}
          name={'Change Category'}
          routeName={RoutesName.CHANGE_CATEGORY}
        />
        <NavigationBox
          Image={ChangeUserIcon}
          name={'Change icon'}
          routeName={RoutesName.CHANGE_ICON}
        />
        <NavigationBox
          Image={ChangeUserIcon}
          name={'Manage users'}
          routeName={GroupRoutesName.MANAGE_USERS}
        />
        <NavigationBox
          Image={ChangeUserIcon}
          name={'Change group name'}
          routeName={RoutesName.CHANGE_LANGUAGE}
        />
      </SettingsTemplate>

      <DeleteSection>
        <Typography weight={700} size={'m'} uppercase color={'red'}>
          delete group
        </Typography>
        <Button customColor={'#ff0000'} onClick={deleteGroup}>
          <FormattedMessage {...messages.buttonDelete} />
        </Button>
      </DeleteSection>
    </MainTemplate>
  );
};

export default GroupSettingsPage;
