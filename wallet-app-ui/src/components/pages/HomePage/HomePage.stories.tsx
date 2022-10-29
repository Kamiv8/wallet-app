import { ComponentMeta, ComponentStory } from '@storybook/react';
import HomePage from './HomePage';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Pages/Home',
  component: HomePage,
  decorators: [withRouter],
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = () => <HomePage />;

export const Primary = Template.bind({});
