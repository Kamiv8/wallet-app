import { LoginForm } from './LoginForm';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Organisms/LoginForm',
  component: LoginForm,
  decorators: [withRouter],
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />;
export const Primary = Template.bind({});
