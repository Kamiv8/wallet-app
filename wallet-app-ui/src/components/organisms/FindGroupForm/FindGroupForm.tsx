import { CardWrapper, Button } from '../../atoms';
import { FormWrapper } from './FindGroupForm.styles';
import { InputField } from '../../molecules';
import messages from '../../../i18n/messages';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../const/routesName';
import { useForm } from '../../../hooks';
import { GroupApi } from '../../../api';
import { ApiStatus } from '../../../models/apiResult';

type TProps = {
  foundedGroup: (data: any) => void;
};

export const FindGroupForm = (props: TProps) => {
  const navigate = useNavigate();

  const initialValues = {
    name: '',
  };

  const { handleChange, values } = useForm<typeof initialValues>(initialValues);

  const onSubmit = async () => {
    const data = await GroupApi.findGroup(values);
    if (data.status === ApiStatus.SUCCESS) {
      props.foundedGroup(data.data);
    }
  };

  return (
    <CardWrapper
      gradientColor
      close={() => navigate(RoutesName.CREATE_FIND_GROUP)}
    >
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
