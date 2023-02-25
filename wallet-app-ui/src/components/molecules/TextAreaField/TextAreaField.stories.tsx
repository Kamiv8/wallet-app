import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextAreaField from './TextAreaField';

export default {
  title: 'Molecules/TextAreaField',
  component: TextAreaField,
} as ComponentMeta<typeof TextAreaField>;

const Template: ComponentStory<typeof TextAreaField> = (args) => (
  <TextAreaField {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  label: {
    defaultMessage: 'TextArea',
    id: 'registerPageUsername',
  },
  variant: 'light',
  onChange: (e) => {
    console.log(e);
  },
  name: 'name',
};
