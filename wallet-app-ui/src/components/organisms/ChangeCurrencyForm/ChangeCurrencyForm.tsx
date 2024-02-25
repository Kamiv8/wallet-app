import { CardWrapper, Button } from '../../atoms';
import messages from '../../../i18n/messages';
import { SelectField } from '../../molecules';
import { FormattedMessage } from 'react-intl';
import { ButtonWrapper } from './ChangeCurrencyForm.styles';
import { parseDataToSelect } from '../../../helpers';
import { useChangeCurrencyForm } from './useChangeCurrencyForm';

export const ChangeCurrencyForm = () => {
  const { state, handleChange, onSubmit, onClose } = useChangeCurrencyForm();
  return (
    <>
      <CardWrapper gradientColor close={onClose}>
        <div>
          <SelectField
            label={{ ...messages.changeCurrencyFormCurrency }}
            name={'currencyId'}
            onChange={handleChange}
            selectItems={parseDataToSelect(state)}
          />
          <ButtonWrapper>
            <Button color={'darkBlue'} onClick={onSubmit}>
              <FormattedMessage {...messages.buttonSave} />
            </Button>
          </ButtonWrapper>
        </div>
      </CardWrapper>
    </>
  );
};
