import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Footer } from './Footer';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Organisms/Footer',
  component: Footer,
  decorators: [withRouter],
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Primary = Template.bind({});
