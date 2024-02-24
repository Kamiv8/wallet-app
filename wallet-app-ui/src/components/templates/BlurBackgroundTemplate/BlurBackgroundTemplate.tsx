import { ReactNode } from 'react';
import {
  Background,
  SpinnerWrapper,
  Wrapper,
} from './BlurBackgroundTemplate.styles';
import Portal from '../../../utils/portal.util';
import { ModalEnum } from '../../../types/enums';

export type TProps = {
  content: ReactNode | ReactNode[];
  isOpen: boolean;
  closeModal: () => void;
  type: ModalEnum;
};

export const BlurBackgroundTemplate = (props: TProps) => {
  return (
    <Portal
      children={
        <>
          <Background onClick={() => props.closeModal()} />
          {(props.type === ModalEnum.SUCCESS ||
            props.type === ModalEnum.ERROR ||
            props.type === ModalEnum.REGISTER_SUCCESS ||
            props.type === ModalEnum.CONFIRM_ACTION) && (
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
