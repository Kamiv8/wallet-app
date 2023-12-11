import { CardWrapper, Typography, Avatar, Button } from '../../atoms';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import {
  ButtonWrapper,
  ContentWrapper,
  HeaderWrapper,
} from '../../organisms/FindGroupForm/FindGroupForm.styles'; // TODO use custom style no export from organisms
import { FoundedGroupType } from '../../../models/resources/foundedGroupType';

type TProps = {
  data: FoundedGroupType;
  onClick: (groupId: string) => void;
};
export const FoundedGroup = (props: TProps) => {
  return (
    <CardWrapper gradientColor close={() => {}}>
      <HeaderWrapper>
        <Avatar image={props.data.icon} />
        <Typography size={'l'} weight={700}>
          {props.data.name}
        </Typography>
      </HeaderWrapper>
      <ContentWrapper>
        <Typography weight={700} size={'m'}>
          Head Admin
        </Typography>
        <Typography weight={700} size={'m'}>
          {props.data.admin}
        </Typography>
        <Typography weight={700} size={'m'}>
          Members
        </Typography>
        <Typography weight={700} size={'m'}>
          {props.data.members}
        </Typography>
      </ContentWrapper>
      <ButtonWrapper>
        <Button color={'darkBlue'} onClick={() => props.onClick(props.data.id)}>
          <FormattedMessage {...messages.buttonSent} />
        </Button>
      </ButtonWrapper>
    </CardWrapper>
  );
};
