import { TFormattedMessage } from '../../../types/types';
import Typography from '../../atoms/Typography/Typography';
import { FormattedMessage } from 'react-intl';
import { TitleWrapper, Wrapper } from './CreateFindGroupCard.styles';

export type TProps = {
  onClick: () => void;
  title: TFormattedMessage;
  description: TFormattedMessage;
};

const CreateFindGroupCard = (props: TProps) => {
  return (
    <Wrapper>
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

export default CreateFindGroupCard;
