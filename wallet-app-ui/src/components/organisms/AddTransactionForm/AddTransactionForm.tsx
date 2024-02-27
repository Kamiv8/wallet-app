import { CardWrapper, Button } from '../../atoms';
import {
  InputField,
  SelectField,
  CheckboxField,
  ColorPickerField,
  TextAreaField,
} from '../../molecules';
import messages from '../../../i18n/messages';
import { FormattedMessage } from 'react-intl';
import { FormWrapper, SavedInputsWrapper } from './AddTransactionForm.styles';
import { FieldType } from '../../../hooks';
import { parseDataToSelect, parseToCurrencySelect } from '../../../helpers';
import { useAddTransactionForm } from './useAddTransactionForm';

export type TProps = {
  onClose: () => void;
};

export const AddTransactionForm = ({ onClose }: TProps) => {
  const {
    handleSubmit,
    values,
    getValidationMessage,
    handleChange,
    isSaved,
    state,
    handleIsSaved,
  } = useAddTransactionForm({ onClose });
  return (
    <CardWrapper gradientColor close={onClose}>
      <FormWrapper>
        <InputField
          label={{ ...messages.addTransactionPageTitle }}
          variant={'dark'}
          name={'title'}
          value={values.title}
          error={getValidationMessage('title')}
          onChange={(e) => handleChange(e, 'title')}
        />
        <InputField
          label={{ ...messages.addTransactionPagePrice }}
          variant={'dark'}
          name={'title'}
          value={values.price}
          error={getValidationMessage('price')}
          type={'number'}
          onChange={(e) => handleChange(e, 'price', FieldType.Number)}
        />
        <SelectField
          selectItems={parseToCurrencySelect(state.currency)}
          label={{ ...messages.addTransactionPageCurrencies }}
          name={'currencyId'}
          error={getValidationMessage('currencyId')}
          onChange={handleChange}
        />
        <SelectField
          selectItems={parseDataToSelect(state.category)}
          label={{ ...messages.addTransactionPageCategory }}
          name={'categoryId'}
          error={getValidationMessage('categoryId')}
          onChange={handleChange}
        />
        <InputField
          label={{ ...messages.addTransactionPageDate }}
          variant={'dark'}
          name={'date'}
          type={'date'}
          error={getValidationMessage('date')}
          onChange={(e) => handleChange(e, 'date', FieldType.Date)}
        />
        <TextAreaField
          label={{ ...messages.addTransactionPageDescription }}
          variant={'dark'}
          error={getValidationMessage('description')}
          onChange={(e) => handleChange(e, 'description')}
          name={'description'}
          value={values.description}
        />
        <CheckboxField
          label={{ ...messages.addTransactionPageSavedTransaction }}
          color={'darkBlue'}
          name={'isSaved'}
          onChange={(e) => handleIsSaved(e)}
        />
        {isSaved && (
          <SavedInputsWrapper>
            <ColorPickerField
              label={{ ...messages.addTransactionPageTextColor }}
              color={'darkBlue'}
              defaultValue={values.textColor}
              onChange={(e) => handleChange(e, 'textColor')}
            />
            <ColorPickerField
              label={{ ...messages.addTransactionPageBackgroundColor }}
              color={'darkBlue'}
              defaultValue={values.backgroundColor}
              onChange={(e) => handleChange(e, 'backgroundColor')}
            />
          </SavedInputsWrapper>
        )}
        <Button color={'darkBlue'} type={'button'} onClick={handleSubmit}>
          <FormattedMessage {...messages.buttonAdd} />
        </Button>
      </FormWrapper>
    </CardWrapper>
  );
};
