import { MainTemplate } from '../../templates';
import { Heading } from '../../molecules/Heading/Heading';
import { HeadingEnum } from '../../../types/enums';
import messages from '../../../i18n/messages';
import { ChangeDateRangeForm } from '../../organisms/ChangeDateRangeForm/ChangeDateRangeForm';
import { AppHeaderWrapper } from '../../../styles/override/AppHeaderWrapper.styles';
import { CardWrapperContent } from '../../../styles/override/CardWrapperContent.styles';

export const ChangeDateRangePage = () => {
  return (
    <MainTemplate>
      <AppHeaderWrapper>
        <Heading
          text={messages.settingsMainPageChangeDateRange}
          type={HeadingEnum.SUB_APP}
        />
      </AppHeaderWrapper>
      <CardWrapperContent>
        <ChangeDateRangeForm />
      </CardWrapperContent>
    </MainTemplate>
  );
};
