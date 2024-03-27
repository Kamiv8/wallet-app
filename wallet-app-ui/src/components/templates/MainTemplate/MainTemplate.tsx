import {
  DesktopContent,
  DesktopWrapper,
  MobileWrapper,
} from './MainTemplate.styles';
import { ReactNode, useContext } from 'react';
import { Footer } from '../../organisms';
import ApplicationContext from '../../../contexts/application.context';
import { Desktop, Tablet } from '../../../rwd';
import { Aside } from '../../organisms/Aside/Aside';

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
      <Tablet>
        <MobileWrapper>{props.children}</MobileWrapper>
        <Footer isGroup={checkIsGroupType()} />
      </Tablet>
      <Desktop>
        <DesktopWrapper>
          <Aside />
          <DesktopContent>{props.children}</DesktopContent>
        </DesktopWrapper>
      </Desktop>
    </>
  );
};
