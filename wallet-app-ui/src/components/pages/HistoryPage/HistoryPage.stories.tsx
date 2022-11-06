import { ComponentMeta, ComponentStory } from '@storybook/react';
import HistoryPage from './HistoryPage';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Pages/History',
  component: HistoryPage,
  decorators: [withRouter],
} as ComponentMeta<typeof HistoryPage>;

const Template: ComponentStory<typeof HistoryPage> = () => <HistoryPage />;

export const Primary = Template.bind({});
