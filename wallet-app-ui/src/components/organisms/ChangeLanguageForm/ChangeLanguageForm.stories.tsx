import { ComponentMeta, ComponentStory } from '@storybook/react';
import ChangeLanguageForm from './ChangeLanguageForm';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Organisms/ChangeLanguageForm',
  component: ChangeLanguageForm,
  decorators: [withRouter],
} as ComponentMeta<typeof ChangeLanguageForm>;

const Template: ComponentStory<typeof ChangeLanguageForm> = () => (
  <ChangeLanguageForm />
);

export const Primary = Template.bind({});
