import { Wrapper } from './MainTemplate.styles';
import { ReactNode } from 'react';
import Footer from '../../organisms/Footer/Footer';

export type TProps = {
  children: ReactNode | ReactNode[];
  isGroup?: boolean;
};

const MainTemplate = (props: TProps) => {
  return (
    <>
      <Wrapper>{props.children}</Wrapper>
      <Footer isGroup={props.isGroup} />
    </>
  );
};

export default MainTemplate;
