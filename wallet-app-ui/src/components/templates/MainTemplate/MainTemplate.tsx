import { Wrapper } from './MainTemplate.styles';
import { ReactNode, useContext } from 'react';
import { Footer } from '../../organisms';
import ApplicationContext from '../../../contexts/application.context';

export type TProps = {
  children: ReactNode | ReactNode[];
  isGroup?: boolean;
};

export const MainTemplate = (props: TProps) => {
  const appContext = useContext(ApplicationContext);
  const checkIsGroupType = (): boolean => {
    return appContext.state.type === 'GROUP';
  };

  return (
    <>
      <Wrapper>{props.children}</Wrapper>
      <Footer isGroup={checkIsGroupType()} />
    </>
  );
};
