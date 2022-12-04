import CardWrapper from '../../atoms/CardWrapper/CardWrapper';
import { FormWrapper } from './FindGroupForm.styles';
import InputField from '../../molecules/InputField/InputField';
import messages from '../../../i18n/messages';
import Button from '../../atoms/Button/Button';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../const/routesName';
import useForm from '../../../hooks/useForm';

const FindGroupForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: '',
  };

  const { handleChange, values } = useForm<typeof initialValues>(initialValues);

  console.log(values);

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
        <Button color={'darkBlue'}>
          <FormattedMessage {...messages.buttonSent} />
        </Button>
      </FormWrapper>
    </CardWrapper>
  );
};

export default FindGroupForm;
