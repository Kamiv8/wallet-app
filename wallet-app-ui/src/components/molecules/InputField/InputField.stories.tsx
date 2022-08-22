import InputField from './InputField';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Molecules/InputFiled',
  component: InputField,
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args} />
);

export const Light = Template.bind({});
Light.args = {
  variant: 'light',
  placeholder: 'Lorem ipsum dolor sit',
  onChange: () => {
    console.log('xd');
  },
  label: 'Username',
  error: 'not valid',
};

export const Dark = Template.bind({});
Dark.args = {
  variant: 'dark',
  placeholder: 'Lorem ipsum dolor sit',
  onChange: () => {
    console.log('xd');
  },
  label: 'Username',
  error: 'not valid',
};
