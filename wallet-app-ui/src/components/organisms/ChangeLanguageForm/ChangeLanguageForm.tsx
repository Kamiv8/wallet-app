import { CardWrapper, Button } from '../../atoms';
import { ButtonWrapper, Wrapper } from './ChangeLanguageForm.styles';
import { SelectField } from '../../molecules';
import messages from '../../../i18n/messages';
import { useContext } from 'react';
import { ActionEnum } from '../../../contexts/application.reducer';
import { Languages } from '../../../i18n/intlUtils';
import applicationContext from '../../../contexts/application.context';
import { useForm } from '../../../hooks';
import { TSelectItem } from '../../atoms/Select/Select';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../const/routesName';

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
  const appContext = useContext(applicationContext);
  const navigate = useNavigate();
  const initialValue = {
    language: Languages.ENGLISH,
  };

  const { values, handleChange } = useForm(initialValue);

  const handleSubmit = () => {
    appContext.dispatch({
      type: ActionEnum.CHANGE_LANGUAGE,
      payload: values.language,
    });
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
