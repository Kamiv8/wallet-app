import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

export default {
  component: Checkbox,
} as Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;
export const Primary: Story = {
  args: {},
};
