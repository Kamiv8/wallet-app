import { CardWrapper, Button, Typography } from '../../atoms';
import { InputField, SelectField } from '../../molecules';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { FormWrapper } from './CreateGroupForm.styles';
import { parseDataToSelect } from '../../../helpers';
import { maxGroupMember, useCreateGroupForm } from './useCreateGroupForm';

export const CreateGroupForm = () => {
  const { currencies, onSubmit, handleChange, onClose } = useCreateGroupForm();
  return (
    <CardWrapper gradientColor close={onClose}>
      <FormWrapper>
        <InputField
          label={{ ...messages.createGroupFormName }}
          variant={'dark'}
          name={'name'}
          onChange={(e) => handleChange(e, 'name')}
        />

        <Typography size={'m'} weight={700}>
          <FormattedMessage {...messages.createGroupFormGroupIcon} />
        </Typography>

        {/*<AvatarPicker*/}
        {/*  selected={values.icon}*/}
        {/*  onClick={handleChange}*/}
        {/*  variant={'group'}*/}
        {/*/>*/}

        <SelectField
          selectItems={maxGroupMember}
          label={{ ...messages.createGroupFormMaxMembers }}
          name={'maxMember'}
          onChange={handleChange}
          variant={'dark'}
        />
        <SelectField
          selectItems={parseDataToSelect(currencies)}
          label={{ ...messages.createGroupFormDefaultCurrencies }}
          name={'currencyId'}
          onChange={handleChange}
          variant={'dark'}
        />
        <Button color={'darkBlue'} onClick={onSubmit}>
          <FormattedMessage {...messages.buttonCreate} />
        </Button>
      </FormWrapper>
    </CardWrapper>
  );
};
