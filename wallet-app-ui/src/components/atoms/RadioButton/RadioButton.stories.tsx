import { RadioButton } from './RadioButton';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: RadioButton,
} as Meta<typeof RadioButton>;

type Story = StoryObj<typeof RadioButton>;

export const Primary: Story = {
  args: {
    value: 'primary',
    onChange: (e) => {
      console.log(e);
    },
  },
};
