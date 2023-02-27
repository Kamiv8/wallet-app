import { ComponentMeta, ComponentStory } from '@storybook/react';
import List from './List';
import messages from '../../../i18n/messages';

export default {
  title: 'Molecules/List',
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  listItem: [
    {
      id: '1',
      name: 'name1',
    },
    {
      id: '2',
      name: 'name2',
    },
  ],
  hasButton: true,
  buttonAction: (id) => {
    console.log(id);
  },
  buttonText: messages.buttonDelete,
  color: 'lightBlue',
  headerText: messages.changeLanguageFormLanguage,
};
