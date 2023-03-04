import { ComponentMeta, ComponentStory } from '@storybook/react';
import AddNotePage from './AddNotePage';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Pages/AddNotePage',
  component: AddNotePage,
  decorators: [withRouter],
} as ComponentMeta<typeof AddNotePage>;

const Template: ComponentStory<typeof AddNotePage> = () => <AddNotePage />;

export const Primary = Template.bind({});
