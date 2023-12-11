import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PersonNavigation } from './PersonNavigation';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Organisms/PersonNavigation',
  component: PersonNavigation,
  decorators: [withRouter],
} as ComponentMeta<typeof PersonNavigation>;

const Template: ComponentStory<typeof PersonNavigation> = () => (
  <PersonNavigation />
);

export const Primary = Template.bind({});
