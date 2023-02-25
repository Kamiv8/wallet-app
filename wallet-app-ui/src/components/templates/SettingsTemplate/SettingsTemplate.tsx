import { ReactNode } from 'react';
import { Wrapper } from './SettingsTemplate.styles';

type TProps = {
  children: ReactNode | ReactNode[];
};

const SettingsTemplate = (props: TProps) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default SettingsTemplate;
