import CardWrapper from '../../atoms/CardWrapper/CardWrapper';
import Typography from '../../atoms/Typography/Typography';
import { Avatar } from '../../atoms/Avatar/Avatar';
import { ReactComponent as AcceptIcon } from '../../../assets/images/doneTask.svg';
import { ReactComponent as RejectIcon } from '../../../assets/images/close.svg';
import {
  ContentRow,
  FirstRow,
  IconRow,
  Wrapper,
} from './JoinUserNotificationCard.styles';

type TProps = {
  iconId: number;
  username: string;
  email: string;
  userId: string;
  notificationId: string;
  accept: (userId: string, notificationId: string) => void;
  reject: (userId: string, notificationId: string) => void;
};

const JoinUserNotificationCard = (props: TProps) => {
  return (
    <CardWrapper gradientColor>
      <Wrapper>
        <FirstRow>
          <Avatar image={props.iconId} />
          <Typography weight={700} size={'l'}>
            {props.username}
          </Typography>
        </FirstRow>
        <ContentRow>
          <Typography weight={700} size={'m'}>
            Email:
          </Typography>
          <Typography weight={700} size={'m'}>
            {props.email}
          </Typography>
        </ContentRow>
        <IconRow>
          <AcceptIcon
            onClick={() => props.accept(props.userId, props.notificationId)}
          />
          <RejectIcon
            onClick={() => props.reject(props.userId, props.notificationId)}
          />
        </IconRow>
      </Wrapper>
    </CardWrapper>
  );
};

export default JoinUserNotificationCard;
