import { AsideFooter } from './AsideFooter';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: AsideFooter,
} as Meta<typeof AsideFooter>;

type Story = StoryObj<typeof AsideFooter>;

export const Primary: Story = {
  args: {},
};
