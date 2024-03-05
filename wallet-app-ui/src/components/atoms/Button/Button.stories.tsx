import { Button } from './Button';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    color: 'orange',
    children: 'dsa',
  },
};

export const Add: Story = {
  args: {
    variant: 'add',
  },
};
