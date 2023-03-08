import { ComponentMeta, ComponentStory } from '@storybook/react';
import SavedTransaction from './SavedTransaction';

export default {
  title: 'Molecules/SavedTransaction',
  component: SavedTransaction,
} as ComponentMeta<typeof SavedTransaction>;

const Template: ComponentStory<typeof SavedTransaction> = (args) => (
  <SavedTransaction {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  category: {
    id: '',
    name: 'Ticket',
  },
  price: 12.34,
  currency: {
    id: 'guid',
    name: 'Polski złoty',
    mark: 'PLN',
    exchangeRate: 1,
  },
  description: 'Lorem ipsum dolor sit Lorem ipsum dolor sit',
};
