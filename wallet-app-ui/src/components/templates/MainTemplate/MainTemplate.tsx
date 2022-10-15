import { Wrapper } from './MainTemplate.styles';
import { ReactNode } from 'react';
import Footer from '../../organisms/Footer/Footer';

export type TProps = {
  children: ReactNode | ReactNode[];
};

const MainTemplate = (props: TProps) => {
  return (
    <>
      <Wrapper>{props.children}</Wrapper>
      <Footer />
    </>
  );
};

export default MainTemplate;
