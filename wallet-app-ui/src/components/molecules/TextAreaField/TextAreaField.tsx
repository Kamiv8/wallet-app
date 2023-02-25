import Typography from '../../atoms/Typography/Typography';
import { TFormattedMessage } from '../../../types/types';
import { ChangeEvent } from 'react';
import { FormattedMessage } from 'react-intl';
import TextArea from '../../atoms/TextArea/TextArea';
import { StyledErrorMessage } from './TextAreaField.style';

type TProps = {
  label: TFormattedMessage;
  variant: 'light' | 'dark';
  placeholder?: TFormattedMessage;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
  error?: string;
};

const TextAreaField = (props: TProps) => {
  return (
    <div>
      <label>
        <Typography
          size={'m'}
          weight={700}
          color={props.variant === 'light' ? 'lightBlue' : 'darkBlue'}
        >
          <FormattedMessage {...props.label} />
        </Typography>
      </label>
      <TextArea
        color={props.variant === 'light' ? 'orange' : 'darkBlue'}
        name={props.name}
        onChange={props.onChange}
        placeholder={props.placeholder?.defaultMessage}
      />
      {props.error && (
        <StyledErrorMessage size={'xs'} color={'error'}>
          {props.error}
        </StyledErrorMessage>
      )}
    </div>
  );
};

export default TextAreaField;
