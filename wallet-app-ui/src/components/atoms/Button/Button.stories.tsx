import Button from './Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ReactComponent as PlusIcon } from '../../../assets/images/plus.svg';

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

const AddTemplate: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{<PlusIcon />}</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  color: 'orange',
};

export const Add = AddTemplate.bind({});
Add.args = {
  variant: 'add',
};
