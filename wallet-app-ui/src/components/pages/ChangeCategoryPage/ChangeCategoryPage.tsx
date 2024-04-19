import { MainTemplate } from '../../templates';
import { ChangeCategoryForm } from '../../organisms';
import messages from '../../../i18n/messages';
import { AppHeaderWrapper } from '../../../styles/override/AppHeaderWrapper.styles';
import { Heading } from '../../molecules/Heading/Heading';
import { HeadingEnum } from '../../../types/enums';
import { CardWrapperContent } from '../../../styles/override/CardWrapperContent.styles';

export const ChangeCategoryPage = () => {
  return (
    <MainTemplate>
      <AppHeaderWrapper>
        <Heading
          text={messages.changeCategoryPageTitle}
          type={HeadingEnum.SUB_APP}
        />
      </AppHeaderWrapper>
      <CardWrapperContent>
        <ChangeCategoryForm />
      </CardWrapperContent>
    </MainTemplate>
  );
};
