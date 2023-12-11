import { Input } from './Input';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    onChange: {
      action: 'click',
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'orange',
  placeholder: 'Lorem ipsum dolor sit',
};

export const Secondary = Template.bind({});

Secondary.args = {
  color: 'darkBlue',
  type: 'password',
  placeholder: 'lorem ipsum',
};

export const Error = Template.bind({});
Error.args = {
  color: 'error',
  placeholder: 'lorem ipsum',
};
