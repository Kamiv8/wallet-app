import { NavLinkLi } from './NavLinkLi';
import { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  component: NavLinkLi,
  decorators: [withRouter],
} as Meta<typeof NavLinkLi>;

type Story = StoryObj<typeof NavLinkLi>;

export const Primary: Story = {
  args: {
    name: {
      id: 's',
      defaultMessage: 'dsa',
    },
    route: '/route',
  },
};
