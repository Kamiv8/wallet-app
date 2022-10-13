import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavigationPage from './NavigationPage';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Pages/NavigationPage',
  component: NavigationPage,
  decorators: [withRouter],
} as ComponentMeta<typeof NavigationPage>;

const Template: ComponentStory<typeof NavigationPage> = () => (
  <NavigationPage />
);

export const Primary = Template.bind({});
