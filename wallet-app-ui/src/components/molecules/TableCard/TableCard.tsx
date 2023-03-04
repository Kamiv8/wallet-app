import { Li, ListWrapper, TitleWrapper, Ul, Wrapper } from './TableCard.styles';
import Typography from '../../atoms/Typography/Typography';

type TProps = {
  backgroundColor: string;
  textColor: string;
  title: string;
  text: Array<string>;
  onClick: () => void;
};

const TableCard = (props: TProps) => {
  return (
    <Wrapper onClick={props.onClick} backgroundColor={props.backgroundColor}>
      <TitleWrapper>
        <Typography customColor={props.textColor} size={'l'}>
          {props.title}
        </Typography>
      </TitleWrapper>
      <ListWrapper>
        <Ul>
          {props.text.map((item, index) => (
            <Li color={props.textColor} key={index}>
              <Typography customColor={props.textColor} size={'m'}>
                {item}
              </Typography>
            </Li>
          ))}
        </Ul>
      </ListWrapper>
    </Wrapper>
  );
};

export default TableCard;
