import { Meta, StoryObj } from '@storybook/react';
import { PaginationItem } from './PaginationItem';

export default {
  component: PaginationItem,
} as Meta<typeof PaginationItem>;

type Story = StoryObj<typeof PaginationItem>;
export const Primary: Story = {
  args: {
    index: 2,
    onClick: () => {
      console.log('xd');
    },
    isCurrent: 2,
  },
};
