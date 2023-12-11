import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChangeUserIconForm } from './ChangeUserIconForm';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Organisms/ChangeUserIconForm',
  component: ChangeUserIconForm,
  decorators: [withRouter],
} as ComponentMeta<typeof ChangeUserIconForm>;

const Template: ComponentStory<typeof ChangeUserIconForm> = () => (
  <ChangeUserIconForm />
);

export const Primary = Template.bind({});
