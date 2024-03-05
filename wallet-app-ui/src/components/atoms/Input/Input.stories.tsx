import { Input } from './Input';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: Input,
  argTypes: {
    onChange: {
      action: 'click',
    },
  },
} as Meta<typeof Input>;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    color: 'orange',
    placeholder: 'Lorem ipsum dolor sit',
  },
};
export const Secondary: Story = {
  args: {
    color: 'darkBlue',
    type: 'password',
    placeholder: 'lorem ipsum',
  },
};
export const Error: Story = {
  args: {
    color: 'error',
    placeholder: 'lorem ipsum',
  },
};
