import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MainTemplate } from './MainTemplate';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Templates/Main',
  component: MainTemplate,
  decorators: [withRouter],
} as ComponentMeta<typeof MainTemplate>;

const Template: ComponentStory<typeof MainTemplate> = (args) => (
  <MainTemplate {...args}>{args.children}</MainTemplate>
);

export const Primary = Template.bind({});
