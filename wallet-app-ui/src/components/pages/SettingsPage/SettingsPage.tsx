import { ReactComponent as ChangeUserIcon } from '../../../assets/images/EditUser.svg';
import { RoutesName } from '../../../const';
import messages from '../../../i18n/messages';
import { MainTemplate, SettingsTemplate } from '../../templates';
import { NavigationBox } from '../../molecules';
import { AppHeaderWrapper } from '../../../styles/override/AppHeaderWrapper.styles';
import { Heading } from '../../molecules/Heading/Heading';
import { HeadingEnum } from '../../../types/enums';

export const SettingsPage = () => {
  return (
    <MainTemplate>
      <AppHeaderWrapper>
        <Heading
          text={messages.settingsMainPageSettings}
          type={HeadingEnum.SUB_APP}
        />
      </AppHeaderWrapper>
      <SettingsTemplate>
        <NavigationBox
          Image={ChangeUserIcon}
          name={messages.settingsMainPageChangeCategory}
          routeName={RoutesName.CHANGE_CATEGORY}
        />
        <NavigationBox
          Image={ChangeUserIcon}
          name={messages.settingsMainPageChangePassword}
          routeName={RoutesName.CHANGE_PASSWORD}
        />
        <NavigationBox
          Image={ChangeUserIcon}
          name={messages.settingsMainPageChangeUsername}
          routeName={RoutesName.CHANGE_USERNAME}
        />
        <NavigationBox
          Image={ChangeUserIcon}
          name={messages.settingsMainPageChangeLanguage}
          routeName={RoutesName.CHANGE_LANGUAGE}
        />
        <NavigationBox
          Image={ChangeUserIcon}
          name={messages.settingsMainPageChangeDateRange}
          routeName={RoutesName.CHANGE_DATE_RANGE}
        />
      </SettingsTemplate>
    </MainTemplate>
  );
};
