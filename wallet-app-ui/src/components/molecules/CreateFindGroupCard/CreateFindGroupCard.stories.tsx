import { ComponentMeta, ComponentStory } from '@storybook/react';
import CreateFindGroupCard from './CreateFindGroupCard';

export default {
  title: 'Molecules/CreateFindGroupCard',
  component: CreateFindGroupCard,
} as ComponentMeta<typeof CreateFindGroupCard>;

const Template: ComponentStory<typeof CreateFindGroupCard> = (args) => (
  <CreateFindGroupCard {...args} />
);
export const Primary = Template.bind({});

Primary.args = {
  title: {
    id: 'id',
    defaultMessage: 'Create Group',
  },
  description: {
    id: 'di',
    defaultMessage: 'Lorem ipsum dolor sit emit',
  },
};
