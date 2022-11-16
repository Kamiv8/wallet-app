import CardWrapper from '../../atoms/CardWrapper/CardWrapper';
import InputField from '../../molecules/InputField/InputField';
import messages from '../../../i18n/messages';
import SelectField from '../../molecules/SelectField/SelectField';
import CheckboxField from '../../molecules/CheckboxField/CheckboxField';
import { useState } from 'react';
import ColorPickerField from '../../molecules/ColorPickerField/ColorPickerField';
import Button from '../../atoms/Button/Button';
import { FormattedMessage } from 'react-intl';
import { FormWrapper, SavedInputsWrapper } from './AddTransactionForm.styles';

export type TProps = {
  a: any;
};

const AddTransactionForm = (props: TProps) => {
  const [isSaved, setIsSaved] = useState<boolean>(false);

  console.log(props);
  return (
    <CardWrapper gradientColor close={() => {}}>
      <FormWrapper>
        <InputField
          label={{ ...messages.addTransactionPageTitle }}
          variant={'dark'}
          name={'title'}
        />
        <InputField
          label={{ ...messages.addTransactionPagePrice }}
          variant={'dark'}
          name={'title'}
          type={'number'}
        />
        <SelectField
          selectItems={[]}
          label={{ ...messages.addTransactionPageCurrencies }}
        />
        <SelectField
          selectItems={[]}
          label={{ ...messages.addTransactionPageCategory }}
        />
        <InputField
          label={{ ...messages.addTransactionPageDate }}
          variant={'dark'}
          name={'date'}
          type={'date'}
        />
        <CheckboxField
          label={{ ...messages.addTransactionPageSavedTransaction }}
          color={'darkBlue'}
          name={'isSaved'}
          onChange={(e) => setIsSaved(e.target.checked)}
        />
        {isSaved && (
          <SavedInputsWrapper>
            <ColorPickerField
              label={{ ...messages.addTransactionPageTextColor }}
              color={'darkBlue'}
            />
            <ColorPickerField
              label={{ ...messages.addTransactionPageBackgroundColor }}
              color={'darkBlue'}
            />
          </SavedInputsWrapper>
        )}

        <Button color={'darkBlue'} type={'button'}>
          <FormattedMessage {...messages.buttonAdd} />
        </Button>
      </FormWrapper>
    </CardWrapper>
  );
};

export default AddTransactionForm;
