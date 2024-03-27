import { Wrapper } from './PersonNavigation.styles';
import { NavigationBox } from '../../molecules';
import { TFormattedMessage } from '../../../types/types';
import { NavigationHelper } from '../../../helpers';
import { NavigationItemsEnum } from '../../../types/enums';

export type TBoxes = {
  image: any;
  name: TFormattedMessage;
  route: string;
  action: () => void;
};

export const PersonNavigation = () => {
  return (
    <Wrapper>
      {NavigationHelper.filterNavigation([NavigationItemsEnum.HOME]).map(
        (b) => (
          <NavigationBox
            key={b.name.id}
            Image={b.image}
            name={b.name}
            routeName={b.route}
          />
        ),
      )}
    </Wrapper>
  );
};
