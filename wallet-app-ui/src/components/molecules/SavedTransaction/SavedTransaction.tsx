import {
  ButtonWrapper,
  FirstRow,
  SecondRow,
  StyledEditIcon,
  Wrapper,
} from './SavedTransaction.styles';
import { Typography, Button } from '../../atoms';
import { cutString } from '../../../utils/utils';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';

export type TProps = {
  id: string;
  title: string;
  category: string;
  price: number;
  currency: string;
  backgroundColor?: string;
  textColor?: string;
  description?: string;
  addTransaction: (id: string) => void;
};

export const SavedTransaction = (props: TProps) => {
  return (
    <Wrapper backgroundColor={props.backgroundColor}>
      <FirstRow>
        <Typography customColor={props.textColor} size={'l'} weight={700}>
          {props.title}
        </Typography>
      </FirstRow>
      <SecondRow>
        <Typography
          customColor={props.textColor}
          weight={700}
          size={'m'}
          uppercase
        >
          {props.category}
        </Typography>
        <Typography customColor={props.textColor} size={'m'} weight={700}>
          {props.price}
          {props.currency}
        </Typography>
      </SecondRow>
      {props.description && (
        <div>
          <Typography customColor={props.textColor} size={'s'} weight={700}>
            {cutString(props.description, 200)}
          </Typography>
        </div>
      )}
      <ButtonWrapper>
        <StyledEditIcon color={props.textColor} onClick={() => {}} />
        <Button
          customColor={props.textColor}
          type={'button'}
          onClick={() => props.addTransaction(props.id)}
        >
          <FormattedMessage {...messages.buttonAdd} />
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};
