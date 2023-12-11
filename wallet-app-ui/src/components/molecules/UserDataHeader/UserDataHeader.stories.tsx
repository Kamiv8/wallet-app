import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UserDataHeader } from './UserDataHeader';

export default {
  title: 'Molecules/UserDataHeader',
  component: UserDataHeader,
} as ComponentMeta<typeof UserDataHeader>;

const Template: ComponentStory<typeof UserDataHeader> = (args) => (
  <UserDataHeader {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  avatarClick: () => {
    console.log('xd');
  },
  avatarNumber: 2,
  fullName: <p>Lorem ipsum</p>,
};
