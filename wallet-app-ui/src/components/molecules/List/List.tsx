import Typography from '../../atoms/Typography/Typography';
import Button from '../../atoms/Button/Button';
import { TFormattedMessage } from '../../../types/types';
import { FormattedMessage } from 'react-intl';
import { ListHeader, ListItem, ListWrapper, Wrapper } from './List.styles';

type TProps = {
  headerText?: TFormattedMessage;
  listItem: TListItem[];
  hasButton: boolean;
  buttonAction?: (id: string) => void;
  buttonText?: TFormattedMessage;
  color: 'darkBlue' | 'lightBlue';
};

type TListItem = {
  id: string;
  name: string;
};

const List = (props: TProps) => {
  return (
    <Wrapper>
      {props.headerText && (
        <ListHeader>
          <Typography color={props.color} weight={700} size={'l'}>
            <FormattedMessage {...props.headerText} />
          </Typography>
        </ListHeader>
      )}
      <ListWrapper>
        {props.listItem.map((x) => (
          <ListItem color={props.color} key={x.id}>
            <Typography color={props.color} size={'m'}>
              {x.name}
            </Typography>
            {props.hasButton && (
              <Button
                color={props.color}
                onClick={() =>
                  props.buttonAction ? props.buttonAction(x.id) : () => {}
                }
              >
                <FormattedMessage {...props.buttonText} />
              </Button>
            )}
          </ListItem>
        ))}
      </ListWrapper>
    </Wrapper>
  );
};

export default List;
