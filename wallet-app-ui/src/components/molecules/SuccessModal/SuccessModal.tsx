import { Wrapper } from './SuccessModal.styles';
import { ReactComponent as ActionSuccessIcon } from '../../../assets/images/actionDone.svg';
import { Typography } from '../../atoms';
import { useRwd } from '../../../hooks';

type TProps = {
  text: string;
};

export const SuccessModal = ({ text }: TProps) => {
  const { getRwdValue } = useRwd();
  return (
    <Wrapper>
      <ActionSuccessIcon />
      <Typography size={getRwdValue('l', 'xl')} color={'orange'} weight={700}>
        {text}
      </Typography>
    </Wrapper>
  );
};
