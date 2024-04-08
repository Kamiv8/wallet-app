import { Li, ListWrapper, TitleWrapper, Ul, Wrapper } from './TableCard.styles';
import { Typography } from '../../atoms';
import { useRwd } from '../../../hooks';

type TProps = {
  backgroundColor: string;
  textColor: string;
  title: string;
  text: Array<string>;
  onClick: () => void;
};

export const TableCard = (props: TProps) => {
  const { getRwdValue } = useRwd();
  return (
    <Wrapper onClick={props.onClick} backgroundColor={props.backgroundColor}>
      <TitleWrapper>
        <Typography customColor={props.textColor} size={getRwdValue('l', 'xl')}>
          {props.title}
        </Typography>
      </TitleWrapper>
      <ListWrapper>
        <Ul>
          {props.text.map((item, index) => (
            <Li color={props.textColor} key={index}>
              <Typography
                customColor={props.textColor}
                size={getRwdValue('m', 'l')}
              >
                {item}
              </Typography>
            </Li>
          ))}
        </Ul>
      </ListWrapper>
    </Wrapper>
  );
};
