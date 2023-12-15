import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SvgIcon } from './SvgIcon';

export default {
  title: 'Atoms/SvgIcon',
  component: SvgIcon,
} as ComponentMeta<typeof SvgIcon>;

const Template: ComponentStory<typeof SvgIcon> = (args) => (
  <SvgIcon {...args} />
);

export const Primary = Template.bind({});
