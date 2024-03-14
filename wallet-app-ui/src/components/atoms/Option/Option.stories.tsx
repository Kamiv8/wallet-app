import { Option } from './Option';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: Option,
} as Meta<typeof Option>;

type Story = StoryObj<typeof Option>;

export const Primary: Story = {
  args: {
    color: 'orange',
    onClick: () => {},
    extraDescription: <div>Lorem 2</div>,
    children: 'sda',
  },
};
