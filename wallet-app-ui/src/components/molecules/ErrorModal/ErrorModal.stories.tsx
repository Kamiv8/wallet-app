import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ErrorModal } from './ErrorModal';

export default {
  title: 'Molecules/ErrorModal',
  component: ErrorModal,
} as ComponentMeta<typeof ErrorModal>;

const Template: ComponentStory<typeof ErrorModal> = (args) => (
  <ErrorModal {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  text: 'lorem ipsum dolor sit',
};
