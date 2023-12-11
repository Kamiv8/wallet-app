import { RegisterPage } from './RegisterPage';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Pages/Register',
  component: RegisterPage,
} as ComponentMeta<typeof RegisterPage>;

const Template: ComponentStory<typeof RegisterPage> = () => <RegisterPage />;

export const Primary = Template.bind({});
