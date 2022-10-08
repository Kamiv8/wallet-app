import { LoginForm } from './LoginForm';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Organisms/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />;
export const Primary = Template.bind({});
