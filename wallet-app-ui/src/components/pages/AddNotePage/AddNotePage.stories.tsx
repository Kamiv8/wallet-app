import { Meta, StoryObj } from '@storybook/react';
import { AddNotePage } from './AddNotePage';

export default {
  component: AddNotePage,
} as Meta<typeof AddNotePage>;

type Story = StoryObj<typeof AddNotePage>;

export const Primary: Story = {
  args: {},
};
