import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import ActionButton, { ActionButtonProps } from './ActionButton';

export default {
  title: 'common/ActionButton',
  component: ActionButton,
  argTypes: {},
} as Meta;

const Template: Story<ActionButtonProps> = args => <ActionButton {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'Some label',
  icon: 'mdi:pencil',
};

export const LargeAndColorful = Template.bind({});
LargeAndColorful.args = {
  label: 'Some label',
  icon: 'mdi:pencil',
  width: '95',
  color: '#adadad',
};
