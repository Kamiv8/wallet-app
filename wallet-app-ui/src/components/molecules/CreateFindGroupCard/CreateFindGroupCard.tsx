import { TFormattedMessage } from '../../../types/types';
import { Typography } from '../../atoms';
import { FormattedMessage } from 'react-intl';
import { TitleWrapper, Wrapper } from './CreateFindGroupCard.styles';

export type TProps = {
  onClick: () => void;
  title: TFormattedMessage;
  description: TFormattedMessage;
};

export const CreateFindGroupCard = (props: TProps) => {
  return (
    <Wrapper onClick={props.onClick}>
      <TitleWrapper>
        <Typography size={'l'} color={'darkBlue'} weight={700} uppercase>
          <FormattedMessage {...props.title} />
        </Typography>
      </TitleWrapper>
      <Typography size={'m'} color={'darkBlue'}>
        <FormattedMessage {...props.description} />
      </Typography>
    </Wrapper>
  );
};
