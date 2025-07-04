import React from 'react';
import SmoothScroll from '../Components/SmoothScroll/index.tsx';
import '../Components/SmoothScroll/SmoothScroll.css';

export default {
  title: 'Components/SmoothScroll',
  component: SmoothScroll,
};

const Template = (args) => <SmoothScroll {...args} />;

export const Default = Template.bind({});
Default.args = {};
