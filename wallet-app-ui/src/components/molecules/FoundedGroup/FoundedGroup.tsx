import CardWrapper from '../../atoms/CardWrapper/CardWrapper';
import { Avatar } from '../../atoms/Avatar/Avatar';
import Typography from '../../atoms/Typography/Typography';

export const FoundedGroup = () => {
  return (
    <CardWrapper gradientColor close={() => {}}>
      <div>
        <Avatar onClick={() => {}} image={''} />
        <Typography size={'m'} weight={700}>
          Lorem ipsum dolor sit
        </Typography>
      </div>
      <div>
        <Typography size={'m'}>HeadAdmin</Typography>
        <Typography size={'m'}>Name admin</Typography>
        <Typography size={'m'}>Members</Typography>
        <Typography size={'m'}>4</Typography>
      </div>
    </CardWrapper>
  );
};

export default FoundedGroup;
