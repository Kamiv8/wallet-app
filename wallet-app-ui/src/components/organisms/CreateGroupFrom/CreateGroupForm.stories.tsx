import { ComponentMeta, ComponentStory } from '@storybook/react';
import CreateGroupForm from './CreateGroupForm';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Organisms/CreateGroupForm',
  component: CreateGroupForm,
  decorators: [withRouter],
} as ComponentMeta<typeof CreateGroupForm>;

const Template: ComponentStory<typeof CreateGroupForm> = () => (
  <CreateGroupForm />
);

export const Primary = Template.bind({});
