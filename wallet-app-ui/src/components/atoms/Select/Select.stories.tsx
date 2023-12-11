import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from './Select';

export default {
  title: 'Atoms/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  items: [
    {
      key: '1',
      description: 'chart1',
    },
    {
      key: '2',
      description: 'chart2',
    },
    {
      key: '3',
      description: 'chart3',
    },
  ],
  name: 'Filter',
};
