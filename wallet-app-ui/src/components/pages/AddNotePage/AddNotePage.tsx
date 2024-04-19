import { MainTemplate } from '../../templates';
import messages from '../../../i18n/messages';
import { AddNoteForm } from '../../organisms';
import { AppHeaderWrapper } from '../../../styles/override/AppHeaderWrapper.styles';
import { Heading } from '../../molecules/Heading/Heading';
import { HeadingEnum } from '../../../types/enums';
import { Content } from './AddNotePage.styles';

export const AddNotePage = () => {
  return (
    <MainTemplate>
      <AppHeaderWrapper>
        <Heading
          text={messages.addNotePageAddNote}
          type={HeadingEnum.SUB_APP}
        />
      </AppHeaderWrapper>
      <Content>
        <AddNoteForm />
      </Content>
    </MainTemplate>
  );
};
