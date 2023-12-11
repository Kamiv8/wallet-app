import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HistoryDetailsPage } from './HistoryDetailsPage';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'pages/HistoryDetailsPage',
  component: HistoryDetailsPage,
  decorators: [withRouter],
} as ComponentMeta<typeof HistoryDetailsPage>;

const Template: ComponentStory<typeof HistoryDetailsPage> = () => (
  <HistoryDetailsPage />
);

export const Primary = Template.bind({});
