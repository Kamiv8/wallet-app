import { MainTemplate } from '../../templates';
import { ChangeUsernameForm } from '../../organisms';
import { AppHeaderWrapper } from '../../../styles/override/AppHeaderWrapper.styles';
import { Heading } from '../../molecules/Heading/Heading';
import messages from '../../../i18n/messages';
import { HeadingEnum } from '../../../types/enums';
import { CardWrapperContent } from '../../../styles/override/CardWrapperContent.styles';

export const ChangeUsernamePage = () => {
  return (
    <MainTemplate>
      <AppHeaderWrapper>
        <Heading
          text={messages.settingsMainPageChangeUsername}
          type={HeadingEnum.SUB_APP}
        />
      </AppHeaderWrapper>
      <CardWrapperContent>
        <ChangeUsernameForm />
      </CardWrapperContent>
    </MainTemplate>
  );
};
