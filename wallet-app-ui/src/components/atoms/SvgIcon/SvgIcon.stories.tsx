import { Meta, StoryObj } from '@storybook/react';
import { SvgIcon } from './SvgIcon';

export default {
  component: SvgIcon,
} as Meta<typeof SvgIcon>;

type Story = StoryObj<typeof SvgIcon>;

export const Primary: Story = {
  args: {},
};
