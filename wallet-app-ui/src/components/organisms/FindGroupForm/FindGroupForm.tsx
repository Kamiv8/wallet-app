import { CardWrapper, Button } from '../../atoms';
import { FormWrapper } from './FindGroupForm.styles';
import { InputField } from '../../molecules';
import messages from '../../../i18n/messages';
import { FormattedMessage } from 'react-intl';
import { useFindGroupForm } from './useFindGroupForm';

type TProps = {
  foundedGroup: (data: any) => void;
};

export const FindGroupForm = (props: TProps) => {
  const { onSubmit, handleChange, onClose } = useFindGroupForm(props);
  return (
    <CardWrapper gradientColor close={onClose}>
      <FormWrapper>
        <InputField
          label={{ ...messages.findGroupFormGroupName }}
          variant={'dark'}
          name={'name'}
          onChange={(e) => handleChange(e, 'name')}
        />
        <Button color={'darkBlue'} onClick={onSubmit}>
          <FormattedMessage {...messages.buttonSent} />
        </Button>
      </FormWrapper>
    </CardWrapper>
  );
};
