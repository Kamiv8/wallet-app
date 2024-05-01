import { Button, CardWrapper, Typography } from '../../atoms';
import { InputField } from '../../molecules';
import { useChangeDateRangeForm } from './useChangeDateRangeForm';
import { DateRangeOption } from '../../../types/enums';
import { RadioButtonsField } from '../../molecules/RadioButtonsField/RadioButtonsField';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { TRadioButtonOptions } from '../../../types/types';
import { FieldType, useRwd } from '../../../hooks';
import {
  ButtonWrapper,
  DescriptionWrapper,
  RadioButtonsWrapper,
} from './ChangeDateRangeForm.styles';

const radioButtonOption: TRadioButtonOptions = {
  legendMessage: messages.changeDateRangeCheckboxLegend,
  name: 'option',
  align: 'horizontal',
  options: [
    {
      value: DateRangeOption.CUSTOM_DAY,
      label: messages.changeDateRangeCustomDay,
    },
    {
      value: DateRangeOption.CUSTOM_DATE,
      label: messages.changeDateRangeCustomDate,
    },
  ],
};

export const ChangeDateRangeForm = () => {
  const { onClose, values, handleChange, handleSubmit, getValidationMessage } =
    useChangeDateRangeForm();
  const { getRwdValue } = useRwd();
  console.log(getValidationMessage('customDate'));
  const fields = [
    null,
    <InputField
      label={messages.changeDateRangeCustomDay}
      variant={'dark'}
      type={'number'}
      name={'customDay'}
      error={getValidationMessage('customDay')}
      onChange={(e) => handleChange(e, 'customDay', FieldType.Number)}
    />,
    <InputField
      label={messages.changeDateRangeCustomDate}
      variant={'dark'}
      type={'date'}
      name={'customDate'}
      error={getValidationMessage('customDate')}
      onChange={(e) => handleChange(e, 'customDate', FieldType.Date)}
    />,
  ];
  return (
    <CardWrapper gradientColor close={onClose}>
      <DescriptionWrapper>
        <Typography size={getRwdValue('m', 'l')} weight={400}>
          <FormattedMessage {...messages.changeDateRangeDescription} />
        </Typography>
      </DescriptionWrapper>
      <RadioButtonsWrapper>
        <RadioButtonsField
          options={radioButtonOption}
          onChange={(e) => handleChange(e, 'option', FieldType.Radio)}
        />
      </RadioButtonsWrapper>
      <div>{fields[values.option]}</div>
      <ButtonWrapper>
        <Button color={'darkBlue'} onClick={handleSubmit}>
          <FormattedMessage {...messages.buttonSave} />
        </Button>
      </ButtonWrapper>
    </CardWrapper>
  );
};
