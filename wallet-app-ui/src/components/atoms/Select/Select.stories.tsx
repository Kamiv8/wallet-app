import { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { ColorMarker } from '../ColorMarker/ColorMarker';

export default {
  component: Select,
} as Meta<typeof Select>;

type Story = StoryObj<typeof Select>;
export const Primary: Story = {
  args: {
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
  },
};

export const WithExtraDescription: Story = {
  args: {
    items: [
      {
        key: 1,
        description: 'Lorem iptum',
      },
    ],
    optionExtraDescription: <ColorMarker colors={['#f955ff']} />,
  },
};
export const WithExtraDescription2: Story = {
  args: {
    items: [
      {
        key: 1,
        description: 'Lorem iptum',
      },
    ],
    optionExtraDescription: <ColorMarker colors={['#000', '#f9553a']} />,
  },
};
