import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AddTransactionForm } from './AddTransactionForm';

export default {
  title: 'Organisms/AddTransactionForm',
  component: AddTransactionForm,
} as ComponentMeta<typeof AddTransactionForm>;

const Template: ComponentStory<typeof AddTransactionForm> = (args) => (
  <AddTransactionForm {...args} />
);

export const Primary = Template.bind({});
