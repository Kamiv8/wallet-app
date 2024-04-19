import { FC } from 'react';
import { ReactComponent as ConfirmActionIcon } from '../../../assets/images/confirmAction.svg';
import { ButtonsWrapper, Wrapper } from './ConfirmActionModal.styles';
import { Button, Typography } from '../../atoms';
import theme from '../../../styles/theme';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { TFormattedMessage } from '../../../types/types';
import { useRwd } from '../../../hooks';

type TProps = {
  title: TFormattedMessage;
  yesAction: () => void;
  noAction: () => void;
};

export const ConfirmActionModal: FC<TProps> = ({
  title,
  yesAction,
  noAction,
}) => {
  const { getRwdValue } = useRwd();
  return (
    <Wrapper>
      <ConfirmActionIcon />
      <Typography size={getRwdValue('l', 'xl')} color={'orange'} weight={700}>
        <FormattedMessage {...title} />
      </Typography>
      <ButtonsWrapper>
        <Button onClick={yesAction} customColor={theme.colors.green}>
          <FormattedMessage {...messages.buttonYes} />
        </Button>
        <Button onClick={noAction} customColor={theme.colors.red}>
          <FormattedMessage {...messages.buttonNo} />
        </Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};
