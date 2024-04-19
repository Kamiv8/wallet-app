import { Aside } from './Aside';
import { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  component: Aside,
  decorators: [withRouter],
} as Meta<typeof Aside>;

type Story = StoryObj<typeof Aside>;

export const Primary: Story = {
  args: {},
};
