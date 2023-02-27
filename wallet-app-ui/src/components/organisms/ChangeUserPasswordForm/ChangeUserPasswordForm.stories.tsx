import { ComponentMeta, ComponentStory } from '@storybook/react';
import ChangeUserPasswordForm from './ChangeUserPasswordForm';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Organisms/ChangeUserPasswordForm',
  component: ChangeUserPasswordForm,
  decorators: [withRouter],
} as ComponentMeta<typeof ChangeUserPasswordForm>;

const Template: ComponentStory<typeof ChangeUserPasswordForm> = () => (
  <ChangeUserPasswordForm />
);

export const Primary = Template.bind({});
