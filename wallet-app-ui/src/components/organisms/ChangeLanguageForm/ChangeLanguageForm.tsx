import { CardWrapper, Button } from '../../atoms';
import { ButtonWrapper, Wrapper } from './ChangeLanguageForm.styles';
import { SelectField } from '../../molecules';
import messages from '../../../i18n/messages';
import { useAppReducer, useFetch, useForm } from '../../../hooks';
import { TSelectItem } from '../../atoms/Select/Select';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../const/routesName';
import { Languages } from '../../../types/enums';
import { UserApi } from '../../../api';

const languages: TSelectItem[] = [
  {
    key: Languages.POLISH,
    description: 'Polski',
  },
  {
    key: Languages.ENGLISH,
    description: 'English',
  },
];
export const ChangeLanguageForm = () => {
  const navigate = useNavigate();
  const { changeLanguage } = useAppReducer();
  const { callToApi } = useFetch();
  const initialValue = {
    language: Languages.ENGLISH,
  };

  const { values, handleChange } = useForm(initialValue);

  const handleSubmit = async () => {
    const response = await callToApi(UserApi.changeLanguage(values));
    changeLanguage({ language: response.data?.language || Languages.ENGLISH });
    navigate(RoutesName.SETTINGS);
  };

  return (
    <CardWrapper gradientColor close={() => navigate(RoutesName.SETTINGS)}>
      <Wrapper>
        <SelectField
          selectItems={languages}
          label={{ ...messages.changeLanguageFormLanguage }}
          name={'language'}
          onChange={handleChange}
        />
        <ButtonWrapper>
          <Button color={'darkBlue'} type={'button'} onClick={handleSubmit}>
            <FormattedMessage {...messages.buttonSave} />
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </CardWrapper>
  );
};
