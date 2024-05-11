import { RadioButtonsField } from './RadioButtonsField';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: RadioButtonsField,
} as Meta<typeof RadioButtonsField>;

type Story = StoryObj<typeof RadioButtonsField>;
export const Primary: Story = {
  args: {
    options: {
      legendMessage: {
        id: 'dsa',
        defaultMessage: 'choose option',
      },
      name: 'group1',
      align: 'horizontal',
      options: [
        {
          value: 1,
          label: {
            id: 's',
            defaultMessage: 'option 1',
          },
        },
        {
          value: 2,
          label: {
            id: 'sd',
            defaultMessage: 'option 2',
          },
        },
      ],
    },
  },
};
