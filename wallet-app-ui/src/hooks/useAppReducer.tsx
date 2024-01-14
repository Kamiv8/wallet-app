import { useContext } from 'react';
import ApplicationContext from '../contexts/application.context';
import { ActionEnum } from '../contexts/application.reducer';

export const useAppReducer = () => {
  const { dispatch } = useContext(ApplicationContext);

  const changeLanguage = (values: any) => {
    dispatch({
      type: ActionEnum.CHANGE_LANGUAGE,
      payload: values.language,
    });
  };

  return {
    changeLanguage,
  };
};
