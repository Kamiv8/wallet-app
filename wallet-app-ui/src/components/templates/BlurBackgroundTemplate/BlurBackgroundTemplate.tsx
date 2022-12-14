import { ReactNode } from 'react';
import {
  Background,
  SpinnerWrapper,
  Wrapper,
} from './BlurBackgroundTemplate.styles';
import Portal from '../../../utils/portal.util';
import { ModalEnum } from '../../../types/enums/modal.enum';

export type TProps = {
  content: ReactNode | ReactNode[];
  isOpen: boolean;
  closeModal: () => void;
  type: ModalEnum;
};

const BlurBackgroundTemplate = (props: TProps) => {
  return (
    <Portal
      children={
        <>
          <Background onClick={() => props.closeModal()} />
          {(props.type === ModalEnum.SUCCESS ||
            props.type === ModalEnum.ERROR ||
            props.type === ModalEnum.REGISTER_SUCCESS) && (
            <Wrapper>{props.content}</Wrapper>
          )}
          {props.type === ModalEnum.LOADING && (
            <SpinnerWrapper>{props.content}</SpinnerWrapper>
          )}
        </>
      }
      isOpen={props.isOpen}
    />
  );
};

export default BlurBackgroundTemplate;
