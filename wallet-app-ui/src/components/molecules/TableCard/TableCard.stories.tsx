import { ComponentMeta, ComponentStory } from '@storybook/react';
import TableCard from './TableCard';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Molecules/TableCard',
  component: TableCard,
  decorators: [withRouter],
} as ComponentMeta<typeof TableCard>;

const Template: ComponentStory<typeof TableCard> = (args) => (
  <TableCard {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  backgroundColor: 'rgba(84, 150, 178, 1)',
  textColor: '#fff',
  title: 'Lorem ipsum',
  text: [
    'lorem ipsum',
    'lorem ipsum2',
    'lorem ipsum3',
    'lorem ipsum4',
    'lorem ipsum5',
  ],
  onClick: () => {
    console.log('e');
  },
};
