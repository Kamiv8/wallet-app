import Typography from './Typography';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Atoms/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}>
    <p>Lorem ipsum</p>
  </Typography>
);

export const Primary = Template.bind({});
Primary.args = {
  size: 'xxl',
  underline: true,
};
