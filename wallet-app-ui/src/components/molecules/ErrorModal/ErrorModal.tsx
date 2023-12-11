import { Wrapper } from './ErrorModal.styles';
import { ReactComponent as WarningIcon } from '../../../assets/images/warningIcon.svg';
import { Typography } from '../../atoms';

export type TProps = {
  text: string;
};

export const ErrorModal = (props: TProps) => {
  return (
    <Wrapper>
      <WarningIcon />
      <Typography size={'l'} color={'orange'} weight={700}>
        {props.text}
      </Typography>
    </Wrapper>
  );
};
