import { Languages } from '../i18n/intlUtils';

export enum ActionEnum {
  CHANGE_LANGUAGE,
}

type TInitialState = {
  language: Languages;
};

type TAction = {
  type: ActionEnum;
  payload: any;
};

export const initialContextState: any = {
  language: Languages.ENGLISH,
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
    default:
      return state;
  }
};
