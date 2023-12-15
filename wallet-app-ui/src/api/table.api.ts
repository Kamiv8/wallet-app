import { IApiResult } from '../models/apiResult';
import axios from 'axios';
import { BaseApiHandler } from './baseApiHandler';
import { BaseApiConfig } from './baseApiConfig';

export class TableApi extends BaseApiConfig {
  public static async getNoteDetails(id: string): Promise<IApiResult> {
    const data = await axios.get(`/table/${id}`, this.apiOptions());
    return BaseApiHandler.handleApi(data);
  }

  public static async editNote(values: any): Promise<IApiResult> {
    const data = await axios.put('/table', values, this.apiOptions());

    return BaseApiHandler.handleApi(data);
  }

  public static async markNoteAsDone(id: string): Promise<IApiResult> {
    const data = await axios.put(`/table/${id}`, undefined, this.apiOptions());
    return BaseApiHandler.handleApi(data);
  }
}
