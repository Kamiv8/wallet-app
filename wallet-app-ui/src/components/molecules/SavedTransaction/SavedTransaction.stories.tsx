import { Meta, StoryObj } from '@storybook/react';
import { SavedTransaction } from './SavedTransaction';

export default {
  component: SavedTransaction,
} as Meta<typeof SavedTransaction>;

type Story = StoryObj<typeof SavedTransaction>;

export const Primary: Story = {
  args: {
    category: 'Ticket',
    price: 12.34,
    currency: 'PLN',
    description: 'Lorem ipsum dolor sit Lorem ipsum dolor sit',
  },
};
