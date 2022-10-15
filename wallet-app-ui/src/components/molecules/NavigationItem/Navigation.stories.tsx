import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavigationItem from './NavigationItem';
import { withRouter } from 'storybook-addon-react-router-v6';
import HistoryIcon from '../../../assets/images/navigationIcons/history.svg';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import Typography from '../../atoms/Typography/Typography';

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
  text: (
    <Typography size={'m'} weight={700}>
      <FormattedMessage {...messages.navigationHistory} />
    </Typography>
  ),
};
