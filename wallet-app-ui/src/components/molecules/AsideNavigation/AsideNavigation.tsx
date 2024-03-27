import { NavigationHelper } from '../../../helpers';
import { NavLinkLi } from '../../atoms/NavLinkLi/NavLinkLi';
import { StyledUl } from './AsideNavigation.styles';

export const AsideNavigation = () => {
  return (
    <StyledUl>
      {NavigationHelper.getNavigationItems.map((x) => (
        <NavLinkLi
          route={x.route}
          Image={x.image}
          name={x.name}
          key={x.name.id}
        />
      ))}
    </StyledUl>
  );
};
