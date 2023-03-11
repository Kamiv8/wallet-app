import { Languages } from '../i18n/intlUtils';

export enum ActionEnum {
  CHANGE_LANGUAGE,
  CHANGE_APPLICATION_TYPE,
}

type TInitialState = {
  language: Languages;
  type: string | null;
  userRole: string | null;
};

type TAction = {
  type: ActionEnum;
  payload: any;
};

export const initialContextState: any = {
  language: Languages.ENGLISH,
  groupId: localStorage.getItem('groupId'),
  userRole: localStorage.getItem('userRole'),
};

export const applicationReducer = (
  state: TInitialState,
  action: TAction,
): TInitialState => {
  switch (action.type) {
    case ActionEnum.CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload as Languages,
      };
    case ActionEnum.CHANGE_APPLICATION_TYPE:
      return {
        ...state,
        type: localStorage.getItem('groupId'),
      };
    default:
      return state;
  }
};
