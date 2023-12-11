import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JoinUserNotificationCard } from './JoinUserNotificationCard';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Organisms/JoinUserNotificationCard',
  component: JoinUserNotificationCard,
  decorators: [withRouter],
} as ComponentMeta<typeof JoinUserNotificationCard>;

const Template: ComponentStory<typeof JoinUserNotificationCard> = (args) => (
  <JoinUserNotificationCard {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  iconId: 1,
  username: 'siema',
  email: 'email@wp.pl',
};
