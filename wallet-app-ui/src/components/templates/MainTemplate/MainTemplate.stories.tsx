import { Meta, StoryObj } from '@storybook/react';
import { MainTemplate } from './MainTemplate';

export default {
  component: MainTemplate,
} as Meta<typeof MainTemplate>;

type Story = StoryObj<typeof MainTemplate>;
export const Primary: Story = {
  args: {},
};
