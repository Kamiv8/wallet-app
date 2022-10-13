import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';
import Image from '../../../assets/images/avatars/Avatar-1.svg';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  image: Image,
  onClick: () => {
    console.log();
  },
  selected: false,
};
