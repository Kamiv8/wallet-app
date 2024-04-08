import messages from '../../../i18n/messages';
import { MainTemplate } from '../../templates';
import { NoteDetailsCard } from '../../organisms';
import { useNoteDetailsPage } from './useNoteDetailsPage';
import { AppHeaderWrapper } from '../../../styles/override/AppHeaderWrapper.styles';
import { Heading } from '../../molecules/Heading/Heading';
import { HeadingEnum } from '../../../types/enums';
import { Content } from './NoteDetails.styles';

export const NoteDetailsPage = () => {
  const { state, doneNote } = useNoteDetailsPage();
  return (
    <MainTemplate>
      <AppHeaderWrapper>
        <Heading
          text={messages.detailsNotePageNoteDetails}
          type={HeadingEnum.SUB_APP}
        />
      </AppHeaderWrapper>
      <Content>
        <NoteDetailsCard
          title={state.title}
          text={state.textList}
          backgroundColor={state.backgroundColor}
          textColor={state.textColor}
          doneNote={doneNote}
        />
      </Content>
    </MainTemplate>
  );
};
