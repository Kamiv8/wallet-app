import { AddUserNoteForm } from '../models/apiTypes/note/addUserNote/addUserNote.form';
import { AddUserNoteCommand } from '../models/apiTypes/note/addUserNote/addUserNote.command';
import { api } from './baseAxios.config';
import { BaseApiHandler } from './baseApiHandler';
import { IApiResult } from '../models/apiResult';
import { GetUserNotesResponse } from '../models/apiTypes/note/getUserNotes/getUserNotes.response';
import { GetUserNoteDetailsResponse } from '../models/apiTypes/note/getUserNoteDetails/getUserNoteDetails.response';
import { MarkAsNoteCommand } from '../models/apiTypes/note/markAsNote/markAsNote.command';

export class NoteApi {
  public static async createUserNote(
    values: AddUserNoteForm,
  ): Promise<IApiResult> {
    const command = new AddUserNoteCommand(
      values.title,
      values.text,
      values.textColor,
      values.backgroundColor,
    );
    const data = await api.post('/notesUser', command);
    return BaseApiHandler.handleApi(data);
  }

  public static async getAllUserNotes(): Promise<
    IApiResult<Array<GetUserNotesResponse>>
  > {
    const data = await api.get('/notesUser');
    return BaseApiHandler.handleApi(data);
  }

  public static async getUserNoteDetails(
    noteId: string,
  ): Promise<IApiResult<GetUserNoteDetailsResponse>> {
    const data = await api.get(`/notesUser/${noteId}`);
    return BaseApiHandler.handleApi(data);
  }

  public static async markAsNote(noteId: string) {
    const command = new MarkAsNoteCommand(noteId);
    const data = await api.patch('/notesUser/markAsDone', command);
    return BaseApiHandler.handleApi(data);
  }
}
