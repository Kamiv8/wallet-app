import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NavigationItem } from './NavigationItem';
import { withRouter } from 'storybook-addon-react-router-v6';
import HistoryIcon from '../../../assets/images/navigationIcons/history.svg';
import messages from '../../../i18n/messages';

export default {
  title: 'Molecules/NavigationItem',
  component: NavigationItem,
  decorators: [withRouter],
} as ComponentMeta<typeof NavigationItem>;

const Template: ComponentStory<typeof NavigationItem> = (args) => (
  <NavigationItem {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  icon: HistoryIcon,
  text: messages.navigationHistory,
};
