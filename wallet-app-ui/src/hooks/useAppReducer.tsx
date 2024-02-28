import { useContext } from 'react';
import ApplicationContext from '../contexts/application.context';
import { ActionEnum, ApplicationType } from '../contexts/application.reducer';

export const useAppReducer = () => {
  const { dispatch } = useContext(ApplicationContext);

  const changeLanguage = (values: any) => {
    dispatch({
      type: ActionEnum.CHANGE_LANGUAGE,
      payload: values.language,
    });
  };

  const changeApplicationType = (type: ApplicationType) => {
    dispatch({
      type: ActionEnum.CHANGE_APPLICATION_TYPE,
      payload: type,
    });
  };

  return {
    changeLanguage,
    changeApplicationType,
  };
};
