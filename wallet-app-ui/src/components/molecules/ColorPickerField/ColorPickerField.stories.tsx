import { ComponentMeta, ComponentStory } from '@storybook/react';
import ColorPickerField from './ColorPickerField';

export default {
  title: 'Molecules/ColorPickerField',
  component: ColorPickerField,
} as ComponentMeta<typeof ColorPickerField>;

const Template: ComponentStory<typeof ColorPickerField> = (args) => (
  <ColorPickerField {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: {
    id: 'x',
    defaultMessage: 'Background color',
  },
  color: 'orange',
};
