import { MainTemplate } from '../../templates';
import { ChangeLanguageForm } from '../../organisms';
import messages from '../../../i18n/messages';
import { AppHeaderWrapper } from '../../../styles/override/AppHeaderWrapper.styles';
import { Heading } from '../../molecules/Heading/Heading';
import { HeadingEnum } from '../../../types/enums';
import { CardWrapperContent } from '../../../styles/override/CardWrapperContent.styles';

export const ChangeLanguagePage = () => {
  return (
    <MainTemplate>
      <AppHeaderWrapper>
        <Heading
          text={messages.changeLanguagePageChangeLanguage}
          type={HeadingEnum.SUB_APP}
        />
      </AppHeaderWrapper>
      <CardWrapperContent>
        <ChangeLanguageForm />
      </CardWrapperContent>
    </MainTemplate>
  );
};
