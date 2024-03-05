import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

export default {
  component: Avatar,
} as Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    onClick: () => {},
    image: 1,
    selected: true,
  },
};
