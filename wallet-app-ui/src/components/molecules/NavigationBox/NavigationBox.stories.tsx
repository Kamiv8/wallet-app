import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NavigationBox } from './NavigationBox';
import { ReactComponent as History } from '../../../assets/images/navigationIcons/history.svg';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Molecules/NavigationBox',
  component: NavigationBox,
  decorators: [withRouter],
} as ComponentMeta<typeof NavigationBox>;

const Template: ComponentStory<typeof NavigationBox> = (args) => (
  <NavigationBox {...args} />
);
export const Primary = Template.bind({});

Primary.args = {
  Image: History,
  name: 'History',
  routeName: '/history',
  notificationsNumber: 2,
};
