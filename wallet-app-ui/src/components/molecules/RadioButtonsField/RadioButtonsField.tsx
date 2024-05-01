import { TRadioButtonOptions } from '../../../types/types';
import { ChangeEvent, FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { RadioButton } from '../../atoms/RadioButton/RadioButton';
import { Label, Legend, OptionsWrapper } from './RadioButtons.styles';

type Props = {
  options: TRadioButtonOptions;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const RadioButtonsField: FC<Props> = ({ options, onChange }) => {
  return (
    <div>
      {options.legendMessage && (
        <Legend size={'l'}>
          <FormattedMessage {...options?.legendMessage} />
        </Legend>
      )}
      <div>
        {options.options.map((option) => (
          <OptionsWrapper key={option.label.id}>
            <RadioButton
              key={option.label.defaultMessage}
              value={option.value}
              onChange={onChange}
              name={options.name}
            />
            <Label size={'m'}>
              <FormattedMessage {...option.label} />
            </Label>
          </OptionsWrapper>
        ))}
      </div>
    </div>
  );
};
