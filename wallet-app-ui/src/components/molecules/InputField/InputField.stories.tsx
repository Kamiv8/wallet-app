import InputField from './InputField';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import messages from '../../../i18n/messages';

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
  placeholder: messages.username,
  onChange: () => {
    console.log('click');
  },
  label: messages.username,
  error: 'not valid',
};

export const Dark = Template.bind({});
Dark.args = {
  variant: 'dark',
  placeholder: {
    id: '',
    defaultMessage: 'lorem',
  },
  onChange: () => {
    console.log('click');
  },
  label: {
    id: '',
    defaultMessage: 'lorem',
  },
  error: 'not valid',
};
