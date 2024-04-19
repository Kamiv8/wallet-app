import { AsideNavigation } from './AsideNavigation';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: AsideNavigation,
} as Meta<typeof AsideNavigation>;

type Story = StoryObj<typeof AsideNavigation>;

export const Primary: Story = {
  args: {},
};
