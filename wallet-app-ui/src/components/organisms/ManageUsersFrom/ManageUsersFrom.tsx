import { CardWrapper, Button } from '../../atoms';
import messages from '../../../i18n/messages';
import { SelectField, List } from '../../molecules';
import { FormattedMessage } from 'react-intl';
import { ButtonWrapper } from './ManageUsersForm.styles';
import { TSelectItem } from '../../atoms/Select/Select';
import { roles, useManageUsersForm } from './useManageUsersForm';

export const ManageUsersFrom = () => {
  const { state, deleteUser } = useManageUsersForm();
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
          variant={'dark'}
        />
        <SelectField
          label={{ ...messages.manageFormRole }}
          name={'role'}
          selectItems={roles}
          variant={'dark'}
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
