import { Typography } from './Typography';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: Typography,
} as Meta<typeof Typography>;

type Story = StoryObj<typeof Typography>;
export const Primary: Story = {
  args: {
    size: 'xxl',
    underline: true,
    children: 'dsadsa',
  },
};
