import { IconContainer, Wrapper } from './NavigationItem.styles';
import { TFormattedMessage } from '../../../types/types';
import { FormattedMessage } from 'react-intl';
import { Typography } from '../../atoms';

export type TProps = {
  icon: any;
  text: TFormattedMessage;
  onClick: (open: boolean) => void;
};

export const NavigationItem = ({ icon, text, onClick }: TProps) => {
  return (
    <Wrapper onClick={() => onClick(true)}>
      <IconContainer icon={icon} />
      <Typography size={'s'} weight={700}>
        <FormattedMessage {...text} />
      </Typography>
    </Wrapper>
  );
};
