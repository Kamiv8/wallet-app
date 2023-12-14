import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SavedTransaction } from './SavedTransaction';

export default {
  title: 'Molecules/SavedTransaction',
  component: SavedTransaction,
} as ComponentMeta<typeof SavedTransaction>;

const Template: ComponentStory<typeof SavedTransaction> = (args) => (
  <SavedTransaction {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  category: 'Ticket',
  price: 12.34,
  currency: 'PLN',
  description: 'Lorem ipsum dolor sit Lorem ipsum dolor sit',
};
