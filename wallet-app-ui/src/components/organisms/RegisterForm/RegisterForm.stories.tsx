import { RegisterForm } from './RegisterForm';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Organisms/RegisterForm',
  component: RegisterForm,
} as ComponentMeta<typeof RegisterForm>;

const Template: ComponentStory<typeof RegisterForm> = () => <RegisterForm />;
export const Primary = Template.bind({});
