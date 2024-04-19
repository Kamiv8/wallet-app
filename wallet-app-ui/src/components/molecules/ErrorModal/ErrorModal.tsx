import { Wrapper } from './ErrorModal.styles';
import { ReactComponent as WarningIcon } from '../../../assets/images/warningIcon.svg';
import { Typography } from '../../atoms';
import { useRwd } from '../../../hooks';

export type TProps = {
  text: string;
};

export const ErrorModal = (props: TProps) => {
  const { getRwdValue } = useRwd();
  return (
    <Wrapper>
      <WarningIcon />
      <Typography
        size={getRwdValue('l', 'l', 'xl')}
        color={'orange'}
        weight={700}
      >
        {props.text}
      </Typography>
    </Wrapper>
  );
};
