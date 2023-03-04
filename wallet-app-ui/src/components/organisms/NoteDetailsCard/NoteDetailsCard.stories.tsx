import { ComponentMeta, ComponentStory } from '@storybook/react';
import NoteDetailsCard from './NoteDetailsCard';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Organisms/NoteDetailsCard',
  component: NoteDetailsCard,
  decorators: [withRouter],
} as ComponentMeta<typeof NoteDetailsCard>;

const Template: ComponentStory<typeof NoteDetailsCard> = (args) => (
  <NoteDetailsCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Lorem ipsum',
  text: ['jeden', 'dwa'],
  backgroundColor: '#AA74C3',
  textColor: '#000',
};
