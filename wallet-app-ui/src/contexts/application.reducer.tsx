import { Languages, LocalstorageEnum, ModalEnum } from '../types/enums';
import { LocalstorageHelper } from '../helpers/localstorage.helper';

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
    message?: string;
    yesAction: () => void;
    noAction: () => void;
  };
};

type TAction = {
  type: ActionEnum;
  payload: any;
};

export const initialContextState: any = {
  language: LocalstorageHelper.getItemNumber(LocalstorageEnum.LANGUAGE),
  type: localStorage.getItem('type') as ApplicationType,
  groupId: localStorage.getItem('groupId'),
  userRole: localStorage.getItem('userRole'),
  modalState: {
    type: ModalEnum.NONE,
    isActive: false,
    message: undefined,
    yesAction: () => {},
    noAction: () => {},
  },
};

export const applicationReducer = (
  state: TInitialState,
  action: TAction,
): TInitialState => {
  switch (action.type) {
    case ActionEnum.CHANGE_LANGUAGE:
      LocalstorageHelper.setItem(LocalstorageEnum.LANGUAGE, action.payload);
      return {
        ...state,
        language: LocalstorageHelper.getItemNumber(LocalstorageEnum.LANGUAGE),
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
          message: action.payload?.message,
          yesAction: action.payload?.yesAction,
          noAction: action.payload?.noAction,
        },
      };
    default:
      return state;
  }
};
