import { ComponentMeta, ComponentStory } from '@storybook/react';
import GroupPage from './GroupPage';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Pages/GroupPage',
  component: GroupPage,
  decorators: [withRouter],
} as ComponentMeta<typeof GroupPage>;

const Template: ComponentStory<typeof GroupPage> = () => <GroupPage />;

export const Primary = Template.bind({});
