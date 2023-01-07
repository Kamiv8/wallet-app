import { ComponentMeta, ComponentStory } from '@storybook/react';
import TransactionItem from './TransactionItem';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Molecules/TransactionItem',
  component: TransactionItem,
  decorators: [withRouter],
} as ComponentMeta<typeof TransactionItem>;

const Template: ComponentStory<typeof TransactionItem> = (args) => (
  <TransactionItem {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  data: {
    id: '',
    title: 'Lorem ipsum ipsum ipsum',
    category: 'ticket',
    date: new Date(),
    currencyMark: 'PLN',
    description:
      'Lorem imsum dolor sit Lorem imsum dolor sitLorem imsum dolor sit Lorem imsum dolor sit Lorem imsum dolor sit Lorem imsum dolor sit Lorem imsum dolor sit',
    price: 32,
  },
};
