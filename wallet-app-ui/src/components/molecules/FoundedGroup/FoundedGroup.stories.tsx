import { ComponentMeta, ComponentStory } from '@storybook/react';
import FoundedGroup from './FoundedGroup';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Molecules/FoundedGroup',
  component: FoundedGroup,
  decorators: [withRouter],
} as ComponentMeta<typeof FoundedGroup>;

const Template: ComponentStory<typeof FoundedGroup> = (args) => (
  <FoundedGroup {...args} />
);

export const Primary = Template.bind({});
