import { CardWrapper, Typography } from '../../atoms';
import {
  ButtonWrapper,
  Li,
  ListWrapper,
  TitleWrapper,
  Ul,
} from './NoteDetailsCard.styles';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../const/routesName';
import { ReactComponent as DoneNoteIcon } from '../../../assets/images/doneTask.svg';
import { ReactComponent as EditIcon } from '../../../assets/images/Edit.svg';

type TProps = {
  title: string;
  text: string[];
  backgroundColor: string;
  textColor: string;
  doneNote: () => void;
};

export const NoteDetailsCard = (props: TProps) => {
  const navigate = useNavigate();
  return (
    <>
      <CardWrapper
        color={props.backgroundColor}
        close={() => navigate(RoutesName.TABLE)}
      >
        <TitleWrapper>
          <Typography customColor={props.textColor} size={'l'}>
            {props.title}
          </Typography>
        </TitleWrapper>
        <ListWrapper>
          <Ul>
            {props.text?.map((item, index) => (
              <Li color={props.textColor} key={index}>
                <Typography customColor={props.textColor} size={'m'}>
                  {item}
                </Typography>
              </Li>
            ))}
          </Ul>
        </ListWrapper>
        <ButtonWrapper>
          <DoneNoteIcon onClick={props.doneNote} />
          <EditIcon />
        </ButtonWrapper>
      </CardWrapper>
    </>
  );
};
