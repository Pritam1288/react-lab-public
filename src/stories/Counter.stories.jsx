import React from 'react';
import Counter from '../Components/Counter/index.tsx';
import '../Components/Counter/Counter.css';

export default {
  title: 'Components/Counter',
  component: Counter,
};

const Template = (args) => <Counter {...args} />;

export const Default = Template.bind({});
Default.args = {};
