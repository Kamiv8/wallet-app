import { ModalEnum } from '../types/enums/modal.enum';
import { useContext, useMemo } from 'react';
import { HashLoader } from 'react-spinners';
import ApplicationContext from '../contexts/application.context';
import { ActionEnum } from '../contexts/application.reducer';
import { BlurBackgroundTemplate } from '../components/templates';
import { ErrorModal, RegisterSuccess } from '../components/molecules';

const ModalRunnerUtil = () => {
  const appContext = useContext(ApplicationContext);
  function closeModal() {
    appContext.dispatch({
      type: ActionEnum.CHANGE_MODAL_STATE,
      payload: {
        type: ModalEnum.ERROR,
        isActive: false,
      },
    });
  }

  function closeRegisterModal() {
    appContext.dispatch({
      type: ActionEnum.CHANGE_MODAL_STATE,
      payload: {
        type: ModalEnum.REGISTER_SUCCESS,
        isActive: false,
      },
    });
  }

  const selectModal = useMemo(() => {
    switch (appContext.state.modalState.type) {
      case ModalEnum.LOADING:
        return (
          <BlurBackgroundTemplate
            type={ModalEnum.LOADING}
            content={
              <HashLoader size={150} color={'#6ADDDD'} speedMultiplier={1.5} />
            }
            isOpen={appContext.state.modalState.isOpen}
            closeModal={() => {}}
          />
        );
      case ModalEnum.SUCCESS:
        return <></>;
      case ModalEnum.ERROR:
        return (
          <BlurBackgroundTemplate
            content={<ErrorModal text={appContext.state.modalState?.message} />}
            isOpen={appContext.state.modalState.isActive}
            closeModal={closeModal}
            type={ModalEnum.ERROR}
          />
        );

      case ModalEnum.REGISTER_SUCCESS:
        return (
          <BlurBackgroundTemplate
            content={<RegisterSuccess text={'Please check your email'} />}
            isOpen={appContext.state.modalState.isActive}
            closeModal={closeRegisterModal}
            type={ModalEnum.REGISTER_SUCCESS}
          />
        );
    }
  }, [appContext.state.modalState.type, appContext.state.modalState.isActive]);

  return <>{selectModal}</>;
};

export default ModalRunnerUtil;
