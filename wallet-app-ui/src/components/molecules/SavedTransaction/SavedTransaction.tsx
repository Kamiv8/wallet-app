import {
  ButtonWrapper,
  FirstRow,
  SecondRow,
  StyledEditIcon,
  Wrapper,
} from './SavedTransaction.styles';
import Typography from '../../atoms/Typography/Typography';
import { cutString } from '../../../utils/utils';
import Button from '../../atoms/Button/Button';
import { Currency } from '../../../models/resources/currency';

export type TProps = {
  category: string;
  price: number;
  currency: Currency;
  backgroundColor?: string;
  textColor?: string;
  description?: string;
};

const SavedTransaction = (props: TProps) => {
  return (
    <Wrapper backgroundColor={props.backgroundColor}>
      <FirstRow>
        <Typography size={'l'} weight={700}>
          ds
        </Typography>
      </FirstRow>
      <SecondRow>
        <Typography weight={700} size={'m'} uppercase>
          {props.category}
        </Typography>
        <Typography size={'m'} weight={700}>
          {props.price}
          {props.currency.mark}
        </Typography>
      </SecondRow>
      {props.description && (
        <div>
          <Typography size={'s'} weight={700}>
            {cutString(props.description, 200)}
          </Typography>
        </div>
      )}
      <ButtonWrapper>
        <StyledEditIcon onClick={() => {}} />
        <Button type={'button'} color={'darkBlue'} onClick={() => {}}>
          Add
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default SavedTransaction;
