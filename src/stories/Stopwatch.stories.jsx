// Storybook story for the Stopwatch component
import React from 'react';
import Stopwatch from '../Components/Stopwatch/index.tsx';
import '../Components/Stopwatch/Stopwatch.css';

// Default export: tells Storybook about this story
export default {
  title: 'Components/Stopwatch', // Sidebar name in Storybook
  component: Stopwatch,         // The component to render
  argTypes: {
    onStart: { action: 'started' },
    onStop: { action: 'stopped' },
    onReset: { action: 'reset' },
  },
};

// Template function: renders the component with given props (args)
const Template = (args) => <Stopwatch {...args} />;

// Default story: shows the Stopwatch with default button labels
export const Default = Template.bind({});
Default.args = {
  startLabel: 'Start',   // Label for the Start button
  stopLabel: 'Stop',     // Label for the Stop button
  resetLabel: 'Reset',   // Label for the Reset button
};

// CustomLabels story: shows the Stopwatch with custom button labels
export const CustomLabels = Template.bind({});
CustomLabels.args = {
  startLabel: 'Begin',   // Custom label for the Start button
  stopLabel: 'Halt',     // Custom label for the Stop button
  resetLabel: 'Restart', // Custom label for the Reset button
};
