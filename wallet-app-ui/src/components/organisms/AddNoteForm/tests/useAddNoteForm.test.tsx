import { IUseAddNoteForm, useAddNoteForm } from '../useAddNoteForm';
import { HookTestComponent } from '../../../../testUtils/hookTestComponent';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('../api/NoteApi', () => ({
  createUserNote: jest.fn(),
}));

const AddNoteHooTest = (
  <HookTestComponent<IUseAddNoteForm> callback={useAddNoteForm} />
);
describe('useAddNoteForm hook', () => {});
