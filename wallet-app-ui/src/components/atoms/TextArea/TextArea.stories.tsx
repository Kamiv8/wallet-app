import { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

export default {
  component: TextArea,
} as Meta<typeof TextArea>;

type Story = StoryObj<typeof TextArea>;
export const Primary: Story = {
  args: {
    color: 'orange',
    placeholder: 'This is textArea',
    onChange: (e) => {
      console.log(e);
    },
  },
};
