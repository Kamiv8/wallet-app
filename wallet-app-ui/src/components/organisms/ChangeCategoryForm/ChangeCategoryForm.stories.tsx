import { ComponentMeta, ComponentStory } from '@storybook/react';
import ChangeCategoryForm from './ChangeCategoryForm';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Organisms/ChangeCategoryForm',
  component: ChangeCategoryForm,
  decorators: [withRouter],
} as ComponentMeta<typeof ChangeCategoryForm>;

const Template: ComponentStory<typeof ChangeCategoryForm> = () => (
  <ChangeCategoryForm />
);

export const Primary = Template.bind({});
