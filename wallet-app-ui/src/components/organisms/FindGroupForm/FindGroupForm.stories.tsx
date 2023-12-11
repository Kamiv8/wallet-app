import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FindGroupForm } from './FindGroupForm';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Organisms/FindGroupForm',
  component: FindGroupForm,
  decorators: [withRouter],
} as ComponentMeta<typeof FindGroupForm>;

const Template: ComponentStory<typeof FindGroupForm> = (args) => (
  <FindGroupForm {...args} />
);

export const Primary = Template.bind({});
