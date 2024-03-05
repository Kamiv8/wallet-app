import { Meta, StoryObj } from '@storybook/react';
import { CardWrapper } from './CardWrapper';

export default {
  component: CardWrapper,
} as Meta<typeof CardWrapper>;

type Story = StoryObj<typeof CardWrapper>;
export const Primary: Story = {
  args: {
    gradientColor: true,
  },
};
