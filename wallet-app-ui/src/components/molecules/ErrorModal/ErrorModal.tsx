import { Wrapper } from './ErrorModal.styles';
import { ReactComponent as WarningIcon } from '../../../assets/images/warningIcon.svg';
import Typography from '../../atoms/Typography/Typography';

export type TProps = {
  text: string;
};

const ErrorModal = (props: TProps) => {
  return (
    <Wrapper>
      <WarningIcon />
      <Typography size={'xl'} color={'orange'} weight={700}>
        {props.text}
      </Typography>
    </Wrapper>
  );
};

export default ErrorModal;
