import LoginPage from './LoginPage';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Pages/Login',
  component: LoginPage,
} as ComponentMeta<typeof LoginPage>;

const Template: ComponentStory<typeof LoginPage> = () => <LoginPage />;

export const Primary = Template.bind({});
