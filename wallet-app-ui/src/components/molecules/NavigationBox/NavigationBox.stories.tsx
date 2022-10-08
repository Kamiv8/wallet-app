import { ComponentMeta, ComponentStory } from '@storybook/react';
import navigationBox from './NavigationBox';
import NavigationBox from './NavigationBox';

export default {
  title: 'Molecules/NavigationBox',
  component: NavigationBox,
} as ComponentMeta<typeof NavigationBox>;

const Template: ComponentStory<typeof NavigationBox> = (args) => (
  <NavigationBox {...args} />
);
export const Primary = Template.bind({});

Primary.args = {
  actions: 4,
};
