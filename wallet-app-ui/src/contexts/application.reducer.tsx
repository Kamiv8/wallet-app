import { Languages } from '../i18n/intlUtils';
import { ModalEnum } from '../types/enums/modal.enum';

export enum ActionEnum {
  CHANGE_LANGUAGE,
  CHANGE_GROUP_ID_USER_ROLE,
  CHANGE_APPLICATION_TYPE,
  CHANGE_MODAL_STATE,
}

export type ApplicationType = 'SINGLE' | 'GROUP';

type TInitialState = {
  language: Languages;
  type: ApplicationType;
  groupId: string | null;
  userRole: string | null;
  modalState: {
    type: ModalEnum;
    isActive: boolean;
    message?: string
  };
};

type TAction = {
  type: ActionEnum;
  payload: any;
};

export const initialContextState: any = {
  language: Languages.ENGLISH,
  type: localStorage.getItem('type') as ApplicationType,
  groupId: localStorage.getItem('groupId'),
  userRole: localStorage.getItem('userRole'),
  modalState: {
    type: ModalEnum.NONE,
    isActive: false,
    message: undefined
  },
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
      localStorage.setItem('type', action.payload);
      return {
        ...state,
        type: action.payload,
      };
    case ActionEnum.CHANGE_MODAL_STATE:
      return {
        ...state,
        modalState: {
          type: action.payload.type,
          isActive: action.payload.isActive,
          message: action.payload?.message
        },
      };
    default:
      return state;
  }
};
