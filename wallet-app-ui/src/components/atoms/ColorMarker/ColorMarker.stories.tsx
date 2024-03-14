import { ColorMarker } from './ColorMarker';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: ColorMarker,
} as Meta<typeof ColorMarker>;

type Story = StoryObj<typeof ColorMarker>;

export const Primary: Story = {
  args: {
    colors: ['#00003', '#f9a033'],
  },
};
