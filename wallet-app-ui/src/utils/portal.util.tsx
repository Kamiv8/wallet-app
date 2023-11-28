import { ReactNode, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

export type TProps = {
  children: ReactNode | ReactNode[];
  isOpen: boolean;
};

export default (props: TProps) => {
  const modal = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    console.log(props.isOpen, "wahhdsa");

    document.body.appendChild(modal);
    modal.style.display = props.isOpen ? 'block' : 'none';
    modal.style.position = 'absolute';
    modal.style.top = '0px';
    modal.style.left = '0px';
    modal.style.width = '100vw';
    modal.style.height = '100vh';

    if (!props.isOpen) {
      modal.remove();
    }
  }, [modal, props.isOpen]);

  return createPortal(props.children, modal);
};
