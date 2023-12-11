import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AddNoteForm } from './AddNoteForm';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Organisms/AddNoteForm',
  component: AddNoteForm,
  decorators: [withRouter],
} as ComponentMeta<typeof AddNoteForm>;

const Template: ComponentStory<typeof AddNoteForm> = () => <AddNoteForm />;

export const Primary = Template.bind({});
