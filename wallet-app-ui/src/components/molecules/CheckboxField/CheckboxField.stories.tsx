import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CheckboxField } from './CheckboxField';

export default {
  title: 'Molecules/CheckboxField',
  component: CheckboxField,
} as ComponentMeta<typeof CheckboxField>;

const Template: ComponentStory<typeof CheckboxField> = (args) => (
  <CheckboxField {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  color: 'orange',
  label: {
    id: 's',
    defaultMessage: 'Background color',
  },
};
