import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ConfirmActionModal } from './ConfirmActionModal';

export default {
  title: 'Molecules/ConfirmActionModal',
  component: ConfirmActionModal,
} as ComponentMeta<typeof ConfirmActionModal>;

const Template: ComponentStory<typeof ConfirmActionModal> = (args) => (
  <ConfirmActionModal {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  title: {
    id: '1',
    defaultMessage: ' ',
  },
};
