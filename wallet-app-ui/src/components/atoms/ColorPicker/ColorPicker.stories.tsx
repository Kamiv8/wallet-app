import { Meta, StoryObj } from '@storybook/react';
import { ColorPicker } from './ColorPicker';

export default {
  component: ColorPicker,
} as Meta<typeof ColorPicker>;

type Story = StoryObj<typeof ColorPicker>;
export const Primary: Story = {
  args: {
    color: 'orange',
  },
};
