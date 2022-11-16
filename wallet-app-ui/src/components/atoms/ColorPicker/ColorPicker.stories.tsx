import { ComponentMeta, ComponentStory } from '@storybook/react';
import ColorPicker from './ColorPicker';

export default {
  title: 'Atoms/ColorPicker',
  component: ColorPicker,
} as ComponentMeta<typeof ColorPicker>;

const Template: ComponentStory<typeof ColorPicker> = (args) => (
  <ColorPicker {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  color: 'orange',
};
