import { ComponentMeta, ComponentStory } from '@storybook/react';
import SelectField from './SelectField';

export default {
  title: 'Molecules/SelectField',
  component: SelectField,
} as ComponentMeta<typeof SelectField>;

const Template: ComponentStory<typeof SelectField> = (args) => (
  <SelectField {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  label: {
    id: 'id',
    defaultMessage: 'Select',
  },
  selectItems: [{ key: 1, description: 'PLN' }],
};
