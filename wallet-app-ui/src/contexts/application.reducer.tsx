import { Languages } from '../i18n/intlUtils';

export enum ActionEnum {
  CHANGE_LANGUAGE,
  CHANGE_GROUP_ID_USER_ROLE,
  CHANGE_APPLICATION_TYPE,
}

export type ApplicationType = 'SINGLE' | 'GROUP';

type TInitialState = {
  language: Languages;
  type: ApplicationType;
  groupId: string | null;
  userRole: string | null;
};

type TAction = {
  type: ActionEnum;
  payload: any;
};

export const initialContextState: any = {
  language: Languages.ENGLISH,
  type: 'SINGLE' as ApplicationType,
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
    case ActionEnum.CHANGE_GROUP_ID_USER_ROLE:
      return {
        ...state,
        groupId: action.payload.groupId,
        userRole: action.payload.userRole,
      };
    case ActionEnum.CHANGE_APPLICATION_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    default:
      return state;
  }
};
