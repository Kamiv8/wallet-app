import { NavigationItemsEnum } from '../types/enums';
import { navigationItems } from '../const';

export class NavigationHelper {
  static filterNavigation(ids: Array<NavigationItemsEnum>) {
    return navigationItems.filter((x) => !ids.includes(x.id));
  }

  static get getNavigationItems() {
    return navigationItems;
  }

  static selectNavigationItems(ids: Array<NavigationItemsEnum>) {
    return navigationItems.filter((x) => ids.includes(x.id));
  }
}
