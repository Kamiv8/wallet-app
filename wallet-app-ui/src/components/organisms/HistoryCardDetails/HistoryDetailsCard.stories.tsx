import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HistoryCardDetails } from './HistoryCardDetails';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Organisms/HistoryCardDetails',
  component: HistoryCardDetails,
  decorators: [withRouter],
} as ComponentMeta<typeof HistoryCardDetails>;

const Template: ComponentStory<typeof HistoryCardDetails> = (args) => (
  <HistoryCardDetails {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  currency: 'PLN',
  price: 12,
  category: 'ticket',
  title: 'Lorem ipsum dolor sit ipsum dolor sit',
  date: new Date(),
  toChart: {
    currentCategory: 0,
    all: 0,
  },
};
