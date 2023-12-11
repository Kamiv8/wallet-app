import { Wrapper } from './RegisterSuccess.styles';
import { ReactComponent as MailIcon } from '../../../assets/images/sentMail.svg';
import { Typography } from '../../atoms';

export type TProps = {
  text: string;
};

export const RegisterSuccess = (props: TProps) => {
  return (
    <Wrapper>
      <MailIcon />
      <Typography size={'l'} color={'lightBlue'}>
        Registration successful
      </Typography>
      <Typography size={'m'} color={'orange'}>
        {props.text}
      </Typography>
    </Wrapper>
  );
};
