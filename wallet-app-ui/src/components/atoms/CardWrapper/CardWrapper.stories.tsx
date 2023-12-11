import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CardWrapper } from './CardWrapper';

export default {
  title: 'Atoms/CardWrapper',
  component: CardWrapper,
} as ComponentMeta<typeof CardWrapper>;

const Template: ComponentStory<typeof CardWrapper> = (args) => (
  <CardWrapper {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  gradientColor: true,
};
