import AvatarPicker from './AvatarPicker';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Molecules/AvatarPicker',
  component: AvatarPicker,
} as ComponentMeta<typeof AvatarPicker>;

const Template: ComponentStory<typeof AvatarPicker> = (args) => (
  <AvatarPicker {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  selected: 1,
  onClick: (e) => {
    console.log(e);
  },
};
