import { ModalEnum } from '../types/enums/modal.enum';
import { useEffect, useMemo } from 'react';
import BlurBackgroundTemplate from '../components/templates/BlurBackgroundTemplate/BlurBackgroundTemplate';
import { HashLoader } from 'react-spinners';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import ErrorModal from '../components/molecules/ErrorModal/ErrorModal';
import { closeModal, openModal } from '../redux/slices/modal.slice';
import RegisterSuccess from '../components/molecules/RegisterSuccess/RegisterSuccess';

const ModalRunnerUtil = () => {
  const dispatch = useAppDispatch();
  const { type, text, isOpen } = useAppSelector((state) => state.modal.data);

  useEffect(() => {
    //if (sessionStorage.getItem('modal') && !!sessionStorage.getItem('modal')) {
    dispatch(
      openModal({
        type: +sessionStorage.getItem('modal')! as unknown as ModalEnum,
        text: sessionStorage.getItem('modalText') as string,
      }),
    );
    // }
  }, [sessionStorage, isOpen, type]);

  const selectModal = useMemo(() => {
    switch (type) {
      case ModalEnum.LOADING:
        return (
          <BlurBackgroundTemplate
            type={ModalEnum.LOADING}
            content={
              <HashLoader size={150} color={'#6ADDDD'} speedMultiplier={1.5} />
            }
            isOpen={isOpen}
            closeModal={() => {}}
          />
        );
      case ModalEnum.SUCCESS:
        return <></>;
      case ModalEnum.ERROR:
        return (
          <BlurBackgroundTemplate
            content={<ErrorModal text={text as string} />}
            isOpen={isOpen}
            closeModal={() => dispatch(closeModal())}
            type={ModalEnum.ERROR}
          />
        );

      case ModalEnum.REGISTER_SUCCESS:
        return (
          <BlurBackgroundTemplate
            content={<RegisterSuccess text={'Please check your email'} />}
            isOpen={isOpen}
            closeModal={() => dispatch(closeModal())}
            type={ModalEnum.REGISTER_SUCCESS}
          />
        );
    }
  }, [type, isOpen]);

  return <>{selectModal}</>;
};

export default ModalRunnerUtil;
