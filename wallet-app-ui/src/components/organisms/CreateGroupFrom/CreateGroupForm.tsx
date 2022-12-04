import CardWrapper from '../../atoms/CardWrapper/CardWrapper';
import InputField from '../../molecules/InputField/InputField';
import SelectField from '../../molecules/SelectField/SelectField';
import Button from '../../atoms/Button/Button';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import Typography from '../../atoms/Typography/Typography';
import AvatarPicker from '../../molecules/avatarPicker/AvatarPicker';
import { FormWrapper } from './CreateGroupForm.styles';

export type TProps = {
  a: any;
};

const CreateGroupForm = (props: TProps) => {
  console.log(props);
  return (
    <CardWrapper gradientColor close={() => {}}>
      <FormWrapper>
        <InputField
          label={{ ...messages.createGroupFormName }}
          variant={'dark'}
          name={'name'}
        />

        <Typography size={'m'} weight={700}>
          <FormattedMessage {...messages.createGroupFormGroupIcon} />
        </Typography>

        <AvatarPicker selected={1} onClick={() => {}} variant={'group'} />

        <SelectField
          selectItems={[]}
          label={{ ...messages.createGroupFormMaxMembers }}
        />
        <SelectField
          selectItems={[]}
          label={{ ...messages.createGroupFormDefaultCurrencies }}
        />
        <Button color={'darkBlue'}>
          <FormattedMessage {...messages.buttonCreate} />
        </Button>
      </FormWrapper>
    </CardWrapper>
  );
};

export default CreateGroupForm;
