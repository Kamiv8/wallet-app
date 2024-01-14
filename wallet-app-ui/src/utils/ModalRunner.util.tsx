import { ModalEnum } from '../types/enums/modal.enum';
import { useContext, useMemo } from 'react';
import { HashLoader } from 'react-spinners';
import ApplicationContext from '../contexts/application.context';
import { BlurBackgroundTemplate } from '../components/templates';
import {
  ErrorModal,
  RegisterSuccess,
  SuccessModal,
} from '../components/molecules';
import { ConfirmActionModal } from '../components/molecules/ConfirmActionModal/ConfirmActionModal';
import { useModalAction } from '../hooks';
import theme from '../styles/theme';

const ModalRunnerUtil = () => {
  const appContext = useContext(ApplicationContext);
  const {
    closeRegisterModal,
    closeErrorModal,
    closeConfirmActionModal,
    closeSuccessModal,
  } = useModalAction();

  const selectModal = useMemo(() => {
    switch (appContext.state.modalState.type) {
      case ModalEnum.LOADING:
        return (
          <BlurBackgroundTemplate
            type={ModalEnum.LOADING}
            content={
              <HashLoader
                size={150}
                color={theme.colors.lightBlue}
                speedMultiplier={1.5}
              />
            }
            isOpen={appContext.state.modalState.isActive}
            closeModal={() => {}}
          />
        );
      case ModalEnum.SUCCESS:
        return (
          <BlurBackgroundTemplate
            content={
              <SuccessModal text={appContext.state.modalState?.message || ''} />
            }
            isOpen={appContext.state.modalState.isActive}
            closeModal={closeSuccessModal}
            type={ModalEnum.SUCCESS}
          />
        );
      case ModalEnum.CONFIRM_ACTION:
        return (
          <BlurBackgroundTemplate
            content={
              <ConfirmActionModal
                title={appContext.state.modalState?.message}
                yesAction={appContext.state.modalState?.yesAction}
                noAction={appContext.state.modalState?.noAction}
              />
            }
            isOpen={appContext.state.modalState.isActive}
            closeModal={closeConfirmActionModal}
            type={ModalEnum.CONFIRM_ACTION}
          />
        );
      case ModalEnum.ERROR:
        return (
          <BlurBackgroundTemplate
            content={<ErrorModal text={appContext.state.modalState?.message} />}
            isOpen={appContext.state.modalState.isActive}
            closeModal={closeErrorModal}
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
