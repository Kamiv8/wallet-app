import { ComponentMeta, ComponentStory } from '@storybook/react';
import ChangeCurrencyForm from './ChangeCurrencyForm';

export default {
  title: 'Organisms/ChangeCurrencyForm',
  component: ChangeCurrencyForm,
} as ComponentMeta<typeof ChangeCurrencyForm>;

const Template: ComponentStory<typeof ChangeCurrencyForm> = () => (
  <ChangeCurrencyForm />
);

export const Primary = Template.bind({});
