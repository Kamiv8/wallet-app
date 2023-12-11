import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BlurBackgroundTemplate } from './BlurBackgroundTemplate';
import { ErrorModal } from '../../molecules';

export default {
  title: 'Templates/BlurBackgroundTemplate',
  component: BlurBackgroundTemplate,
} as ComponentMeta<typeof BlurBackgroundTemplate>;

const Template: ComponentStory<typeof BlurBackgroundTemplate> = (args) => (
  <BlurBackgroundTemplate {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  content: <ErrorModal text={'lorem ipsum'} />,
  isOpen: true,
};
