import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChangeUsernameForm } from './ChangeUsernameForm';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Organisms/ChangeUsernameForm',
  component: ChangeUsernameForm,
  decorators: [withRouter],
} as ComponentMeta<typeof ChangeUsernameForm>;

const Template: ComponentStory<typeof ChangeUsernameForm> = () => (
  <ChangeUsernameForm />
);

export const Primary = Template.bind({});
