import { RegisterTemplate } from './RegisterTemplate';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ReactComponent as WireframeElement } from '../../../assets/images/WireframeElement.svg';
import { Typography } from '../../atoms';

export default {
  title: 'Templates/Register',
  component: RegisterTemplate,
} as ComponentMeta<typeof RegisterTemplate>;

const Template: ComponentStory<typeof RegisterTemplate> = (args) => (
  <RegisterTemplate {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  Image: WireframeElement,
  Heading: (
    <Typography size={'xxl'} weight={700} color={'lightBlue'}>
      Lorem Ipsum
    </Typography>
  ),
  Form: <WireframeElement width={'100%'} height={'100%'} />,
};
