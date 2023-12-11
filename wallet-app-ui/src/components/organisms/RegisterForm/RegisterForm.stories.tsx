import { RegisterForm } from './RegisterForm';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Organisms/RegisterForm',
  component: RegisterForm,
  decorators: [withRouter],
} as ComponentMeta<typeof RegisterForm>;

const Template: ComponentStory<typeof RegisterForm> = () => <RegisterForm />;
export const Primary = Template.bind({});
