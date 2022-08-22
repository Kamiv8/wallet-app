import Button from './Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Filter</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  color: 'orange',
};
