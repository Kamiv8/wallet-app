import { ComponentMeta, ComponentStory } from '@storybook/react';
import PaginationItem from './PaginationItem';

export default {
  title: 'Atoms/PaginationItem',
  component: PaginationItem,
} as ComponentMeta<typeof PaginationItem>;

const Template: ComponentStory<typeof PaginationItem> = (args) => (
  <PaginationItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  index: 2,
  onClick: () => {
    console.log('xd');
  },
  isCurrent: 2,
};
