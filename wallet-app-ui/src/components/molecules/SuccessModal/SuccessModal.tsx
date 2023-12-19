import { Wrapper } from './SuccessModal.styles';
import { ReactComponent as ActionSuccessIcon } from '../../../assets/images/actionDone.svg';
import { Typography } from '../../atoms';

type TProps = {
  text: string;
};

export const SuccessModal = ({ text }: TProps) => {
  return (
    <Wrapper>
      <ActionSuccessIcon />
      <Typography size={'l'} color={'orange'} weight={700}>
        {text}
      </Typography>
    </Wrapper>
  );
};
