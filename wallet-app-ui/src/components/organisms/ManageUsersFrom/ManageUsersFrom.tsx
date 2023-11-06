import CardWrapper from '../../atoms/CardWrapper/CardWrapper';
import messages from '../../../i18n/messages';
import SelectField from '../../molecules/SelectField/SelectField';
import List from '../../molecules/List/List';
import Button from '../../atoms/Button/Button';
import { FormattedMessage } from 'react-intl';
import { ButtonWrapper } from './ManageUsersForm.styles';
import { GroupApi } from '../../../api/group.api';
import { useEffect, useState } from 'react';
import { TSelectItem } from '../../atoms/Select/Select';
import { RoleEnum } from '../../../types/enums/role.enum';

const roles: TSelectItem[] = [
  {
    key: RoleEnum.ADMIN,
    description: 'Admin',
  },
  {
    key: RoleEnum.MEMBER,
    description: 'Member',
  },
];

const ManageUsersFrom = () => {
  const [state, setState] = useState({
    users: [],
  });

  useEffect(() => {
    (async () => {
      const users = await GroupApi.getUsers();
      setState({
        users: users.data?.response,
      });
    })();
  }, []);

  const deleteUser = async (userId: string) => {
    await GroupApi.deleteUser(userId);
  };

  return (
    <>
      <CardWrapper gradientColor close={() => {}}>
        <SelectField
          label={{ ...messages.manageFormUser }}
          name={'user'}
          selectItems={state.users.map(
            (x: any) =>
              ({
                key: x.id,
                description: x.username,
              } as TSelectItem),
          )}
        />
        <SelectField
          label={{ ...messages.manageFormRole }}
          name={'role'}
          selectItems={roles}
        />

        <ButtonWrapper>
          <Button color={'darkBlue'}>
            <FormattedMessage {...messages.buttonSave} />
          </Button>
        </ButtonWrapper>

        <List
          listItem={[]}
          hasButton
          color={'darkBlue'}
          buttonAction={deleteUser}
        />
      </CardWrapper>
    </>
  );
};

export default ManageUsersFrom;
