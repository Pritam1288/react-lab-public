// Import React library to use JSX and React components
import React from 'react';
// Import the CourseCardProps component from the Components folder
import CourseCardProps from '../Components/CourseCardProps/index.tsx';
// Import the CSS file for styling the CourseCardProps component
import '../Components/CourseCardProps/CourseCardProps.css';

// This is the default export for Storybook, which tells Storybook about this component
export default {
  title: 'Course Card Props', // The name shown in Storybook's sidebar
  component: CourseCardProps, // The component to display
  argTypes: {
    tag: {
      control: { type: 'select' },
      options: ['Pega Constellation', 'Pega Gen AI'],
      description: 'Select the tag for the course',
    },
  },
};

// Template function to create stories for the component
// 'args' allows you to pass different props to the component
const Template = (args) => <CourseCardProps {...args} />;

// This is the first story, called 'Default'
// It uses the Template and provides default props (args) for the component
export const Default = Template.bind({});
Default.args = {
  image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Updated image URL for the course card
  tag: 'Pega Constellation', // Tag or label for the course
  title: 'Mastering DX Components', // Title of the course
  description: 'Learn to build scalable UI with Pega SDK.', // Short description
  date: 'Starts July 10, 2025', // Start date of the course
  classes: '8 Live Classes | Weekend Batch', // Info about the classes
  price: 249, // Current price
  oldPrice: 399, // Old price (for showing discount)
};

