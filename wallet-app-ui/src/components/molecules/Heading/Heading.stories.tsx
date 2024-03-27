import { Heading } from './Heading';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: Heading,
} as Meta<typeof Heading>;

type Story = StoryObj<typeof Heading>;

export const Primary: Story = {
  args: {
    text: {
      id: 'dsa',
      defaultMessage: 'Lorem ipsum',
    },
  },
};
