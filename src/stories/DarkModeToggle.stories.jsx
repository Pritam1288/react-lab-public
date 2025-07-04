import React from 'react';
import DarkModeToggle from '../Components/DarkModeToggle/index.tsx';
import '../Components/DarkModeToggle/DarkModeToggle.css';

export default {
  title: 'Components/DarkModeToggle',
  component: DarkModeToggle,
};

const Template = (args) => <DarkModeToggle {...args} />;

export const Default = Template.bind({});
Default.args = {};
