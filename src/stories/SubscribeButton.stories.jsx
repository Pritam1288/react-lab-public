import SubscribeButton from '../Components/SubscribeButton/index.tsx';
import '../Components/SubscribeButton/SubscribeButton.css';

export default {
  title: 'Components/SubscribeButton',
  component: SubscribeButton,
};

const Template = (args) => <SubscribeButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
