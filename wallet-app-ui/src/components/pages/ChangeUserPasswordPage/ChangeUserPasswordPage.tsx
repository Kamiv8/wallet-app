import { MainTemplate } from '../../templates';
import { ChangeUserPasswordForm } from '../../organisms';
import messages from '../../../i18n/messages';
import { AppHeaderWrapper } from '../../../styles/override/AppHeaderWrapper.styles';
import { Heading } from '../../molecules/Heading/Heading';
import { HeadingEnum } from '../../../types/enums';
import { CardWrapperContent } from '../../../styles/override/CardWrapperContent.styles';

export const ChangeUserPasswordPage = () => {
  return (
    <MainTemplate>
      <AppHeaderWrapper>
        <Heading
          text={messages.settingsMainPageChangePassword}
          type={HeadingEnum.SUB_APP}
        />
      </AppHeaderWrapper>
      <CardWrapperContent>
        <ChangeUserPasswordForm />
      </CardWrapperContent>
    </MainTemplate>
  );
};
