import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AddTransactionPage } from './AddTransactionPage';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Pages/AddTransaction',
  component: AddTransactionPage,
  decorators: [withRouter],
} as ComponentMeta<typeof AddTransactionPage>;

const Template: ComponentStory<typeof AddTransactionPage> = () => (
  <AddTransactionPage />
);

export const Primary = Template.bind({});
