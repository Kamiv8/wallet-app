import { useContext } from "react";
import ApplicationContext from "../contexts/application.context";
import { ActionEnum } from "../contexts/application.reducer";
import { ModalEnum } from "../types/enums/modal.enum";


export const useModalAction = () => {
  const {dispatch} = useContext(ApplicationContext);

  const openRegisterModal = () => {
    dispatch({
      type: ActionEnum.CHANGE_MODAL_STATE,
      payload: {
        type: ModalEnum.REGISTER_SUCCESS,
        isActive: true
      }
    })
  }

  const openErrorModal = (message?: string) => {
    dispatch({
      type: ActionEnum.CHANGE_MODAL_STATE,
      payload: {
        type: ModalEnum.ERROR,
        isActive: true,
        message
      }
    })
  }
  const closeErrorModal = () => {
    dispatch({
      type: ActionEnum.CHANGE_MODAL_STATE,
      payload: {
        type: ModalEnum.ERROR,
        isActive: false,
      }
    })
  }


  return {
    openRegisterModal,
    openErrorModal,
    closeErrorModal
  }


}