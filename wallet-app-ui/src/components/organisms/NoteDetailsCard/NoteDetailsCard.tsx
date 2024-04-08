import { CardWrapper, Typography, SvgIcon } from '../../atoms';
import {
  ButtonWrapper,
  CardContent,
  Li,
  ListWrapper,
  Ul,
} from './NoteDetailsCard.styles';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../const';
import { ReactComponent as DoneNoteIcon } from '../../../assets/images/doneTask.svg';
import { ReactComponent as EditIcon } from '../../../assets/images/Edit.svg';
import { useRwd } from '../../../hooks';

type TProps = {
  title: string;
  text: string[];
  backgroundColor: string;
  textColor: string;
  doneNote: () => void;
};

export const NoteDetailsCard = (props: TProps) => {
  const { getRwdValue } = useRwd();
  const navigate = useNavigate();
  return (
    <>
      <CardWrapper
        color={props.backgroundColor}
        close={() => navigate(RoutesName.TABLE)}
        iconColor={props.textColor}
        title={
          <Typography
            customColor={props.textColor}
            size={getRwdValue('l', 'xl', 'xxl')}
          >
            {props.title}
          </Typography>
        }
      >
        <CardContent>
          <ListWrapper>
            <Ul>
              {props.text?.map((item, index) => (
                <Li color={props.textColor} key={index}>
                  <Typography
                    customColor={props.textColor}
                    size={getRwdValue('m', 'l', 'xl')}
                  >
                    {item}
                  </Typography>
                </Li>
              ))}
            </Ul>
          </ListWrapper>
          <ButtonWrapper>
            <SvgIcon Icon={EditIcon} color={props.textColor} />
            <SvgIcon
              Icon={DoneNoteIcon}
              color={props.textColor}
              onClick={props.doneNote}
            />
          </ButtonWrapper>
        </CardContent>
      </CardWrapper>
    </>
  );
};
